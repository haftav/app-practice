import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { Prisma, Todo } from '@prisma/client';
import { Session } from 'next-auth';

import { prisma } from '../../../db';
import type { RequestHandler } from '../../../models';

// TODO: type error interfaces
interface Data {
  data: {
    todos: Todo[];
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const session = await getSession({ req });

  if (!session || !session.user) {
    res.status(401).end();
  } else {
    if (req.method === 'GET') {
      getRequest({ req, res, session });
    }

    if (req.method === 'POST') {
      postRequest({ req, res, session });
    }
  }
}

async function getRequest({ req, res, session }: RequestHandler) {
  try {
    const todos = await prisma.todo.findMany({
      where: {
        userId: {
          equals: session.user.id,
        },
      },
    });

    res.status(200).json({
      data: {
        todos,
      },
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
}

async function postRequest({ req, res, session }: RequestHandler) {
  try {
    const todo = await prisma.todo.create({
      data: {
        userId: session.user.id,
        name: req.body.description || '',
        description: req.body.description || '',
        completed: req.body.completed || false,
      },
    });

    res.status(200).json({
      data: {
        todo,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      res.status(500).json({
        error: error.message,
      });
    }
    if (error instanceof Prisma.PrismaClientValidationError) {
      res.status(500).json({
        error: error.message,
      });
    }
  }
}
