import prismaClient from "../../prisma";

interface RemoveItemInterface{
    id: string
}

class RemoveItemService{
    async execute({id}: RemoveItemInterface){
        const remove = prismaClient.item.delete({
            where:{
                id: id
            }
        })
        
        return remove
    }
}

export { RemoveItemService }