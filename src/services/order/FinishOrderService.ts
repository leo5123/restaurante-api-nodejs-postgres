import prismaClient from "../../prisma";

interface FinishOrderServiceInterface{
    id: string
}

class FinishOrderService{
    async execute({id}: FinishOrderServiceInterface){
        const finish = prismaClient.order.update({
            where:{
                id: id
            },
            data:{
                status: true
            }
        })

        return finish
    }
}

export { FinishOrderService }