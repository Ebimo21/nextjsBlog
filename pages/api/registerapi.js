const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {

    if (req.method === 'POST') {

            const user = req.body;
            console.log(user);
            
        var notes;
        
                try {
                    
                 notes =  await prisma.user.create({
                        data: user
                    })
        
                  } catch (e) {
                    if (e instanceof Prisma.PrismaClientKnownRequestError) {
                      // The .code property can be accessed in a type-safe manner
                      if (e.code === 'P2002') {
                        console.log(
                          'There is a unique constraint violation, a new user cannot be created with this email'
                        )
                      }
                    }
                    throw e
                  }
              
        
            
              // Found the name.
              // Sends a HTTP success code
              res.status(200).json( notes )
            //   res.redirect('back');
            }
        
      // Process a POST request
     else {
      // Handle any other HTTP method
    }
  }