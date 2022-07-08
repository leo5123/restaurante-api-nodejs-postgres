import prismaClient from "../../prisma";

interface DetailOrderServiceInterface{
    id: string
}

class DetailOrderService {
    async execute({id}: DetailOrderServiceInterface){
        const detail = prismaClient.item.findMany({
            where:{
                order_id: id
            },
            include:{
                product:true,
                order:true,
                
            }
        })
        return detail
    }
}

export { DetailOrderService }