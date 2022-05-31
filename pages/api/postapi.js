const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {

    const posts = await prisma.post.findMany({
        where: { published: false },
        include: { author: true },
      })
      res.send(posts)

    
  }

