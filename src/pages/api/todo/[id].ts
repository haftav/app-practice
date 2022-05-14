import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { Todo } from '@prisma/client';

import { prisma } from '../../../db';
import type { RequestHandler } from '../../../models';

interface Data {
  data: {
    todos: Todo[];
  };
}

function getId(req: NextApiRequest): number {
  const id = typeof req.query.id === 'string' ? req.query.id : req.query.id[0];

  return Number(id);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const session = await getSession({ req });

  if (!session || !session.user) {
    res.status(401).end();
  } else {
    if (req.method === 'GET') {
      getRequest({ req, res, session });
    }
    if (req.method === 'PUT') {
      putRequest({ req, res, session });
    }
    if (req.method === 'DELETE') {
      deleteRequest({ req, res, session });
    }
  }
}

async function getRequest({ req, res, session }: RequestHandler) {
  const id = getId(req);

  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  });

  res.status(200).json({
    data: {
      todo,
    },
  });
}

async function putRequest({ req, res, session }: RequestHandler) {
  const id = getId(req);

  const data: { name?: string; description?: string } = {};

  if (req.body.name) {
    data.name = req.body.name;
  }

  if (req.body.description) {
    data.description = req.body.description;
  }

  const todo = await prisma.todo.update({
    where: {
      id: Number(id),
    },
    data,
  });

  res.status(200).json({
    data: {
      todo,
    },
  });
}

async function deleteRequest({ req, res, session }: RequestHandler) {
  const id = getId(req);
  const todo = await prisma.todo.delete({
    where: {
      id,
    },
  });

  res.status(200).json({
    data: {
      todo,
    },
  });
}
