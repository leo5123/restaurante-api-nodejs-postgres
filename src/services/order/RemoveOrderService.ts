import prismaClient from "../../prisma";

interface removeInterface{
    id: string
}

class removerOrderService {
    async execute({id}: removeInterface){
        const remove = prismaClient.order.delete({
            where:{
              id: id  
            }
        })
        
        return remove
    }
}

export { removerOrderService }