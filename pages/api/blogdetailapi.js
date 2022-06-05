const { PrismaClient } = require('@prisma/client');

export default async  function handler (req, res){
    
    const prisma = new PrismaClient();
    const id = req.query;
    console.log(id)

    if(req.method !== "GET"){

       const resp =  await prisma.post.findUnique({
            where: {

                id: 2,
            }
        })

        
        return res.status(200);
    }
    


}