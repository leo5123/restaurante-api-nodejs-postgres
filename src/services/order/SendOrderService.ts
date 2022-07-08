import prismaClient from "../../prisma";

interface SendOrderServiceInterface{
    id: string

}

class SendOrderService{
    async execute({id}: SendOrderServiceInterface){
        const send = prismaClient.order.update({
            where:{
                id: id
                
            },
            data:{
                draft: false
            }
        })
        return send
    }
}

export { SendOrderService }