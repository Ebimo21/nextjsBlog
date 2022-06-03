const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
    if(req.method === "POST"){

        const user = req.body;

        if(user){
            const posts = await prisma.post.findMany({
                where: { authorId: user.id },
                include: { author: true },
              })
              res.send(posts)
        }else{
            const posts = await prisma.post.findMany({
                where: { published: false  },
                include: { author: true },
              })
              res.send(posts)
        }
    }

    if(req.method === "GET"){
        // const user = req.body;
    // console.log("User: d" + user.id);
    const posts = await prisma.post.findMany({
        where: { published: false  },
        include: { author: true },
      })
      res.send(posts)
    }

    
  }

