const {PrismaClient, Prisma} = require('@prisma/client');



export default async function handler(req, res){
    
    const prisma = new PrismaClient();

    if(req.method === "POST"){

        const data = JSON.parse(req.body);

        // const datas = JSON.parse(data)
        // const dataTitle = datas.session;
        // console.log(dataTitle)
        var notes;

        // try {
                    
        //     notes =  await prisma.user.update({
        //         where:{
        //             id: "cl3u9ceey003309mjnshszf95",
        //         },
                

        //         data: {
        //             posts: {
        //                 create: [
        //                     {
        //                         title: datas.title,
        //             published: true,
        //                     }
        //                 ]
        //             }
                    
        //         }
        //        })
   
        //      } catch (e) {
        //        if (e instanceof Prisma.PrismaClientKnownRequestError) {
        //          // The .code property can be accessed in a type-safe manner
        //          if (e.code === 'P2002') {
        //            console.log(
        //              'There is a unique constraint violation, a new user cannot be created with this email'
        //            )
        //          }
        //        }
        //        throw e
        //      }
         
        //      res.status(200).json( notes )

        // if(data){
            const response = await prisma.user.update({
                where:{
                    id: data.session,
                },
                
                data: {
                    posts: {
                        create: [
                            {
                                title: data.title,
                                // content: data.content,
                                
                                published: data.published === "true",
                            }
                        ]
                    }
                                    
                }
            })
                // .then(response => response.json())
              res.status(200).json( response )

        
        // }

    }
}