
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.post.create({
    data: {
     title: "title of post",
    //  author: {
    //     connect: {
    //         id: 1
    //     }
    //  }
    authorId:1
    }
  })
}

main()