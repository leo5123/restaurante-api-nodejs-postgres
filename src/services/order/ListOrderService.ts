import prismaClient from "../../prisma";

class ListOrderService{
    async execute(){
        const list = prismaClient.order.findMany({
            where:{
               draft: false,
               status: false
            },
            orderBy:{
                created_at: 'desc'
            }
        })
        return list
    }
}

export { ListOrderService }