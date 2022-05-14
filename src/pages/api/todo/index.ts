import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { Todo } from '@prisma/client';
import { Session } from 'next-auth';

import { prisma } from '../../../db';
import type { RequestHandler } from '../../../models';

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
}

async function postRequest({ req, res, session }: RequestHandler) {
  const todo = await prisma.todo.create({
    data: {
      userId: session.user.id,
      name: req.body.description || '',
      description: req.body.description || '',
    },
  });

  res.status(200).json({
    data: {
      todo,
    },
  });
}
