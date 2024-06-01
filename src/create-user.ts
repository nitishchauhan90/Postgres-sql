import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log: ['info', 'query'],})  //if we add log: part in PrismaClient then it will give query in console

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data:{
        email: "nitishchauhan33@gmail.com",
        name: "Nitish Chauhan",

    }
  })

}

main()

//   .then(async () => {
//     console.log("done with query")
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })