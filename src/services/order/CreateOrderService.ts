import prismaClient from "../../prisma"

interface OrderExecute{
    table: number,
    name?: string

}

class CreateOrderService {
    async execute({table, name}: OrderExecute){
       
        const order = prismaClient.order.create({
            data:{
                table: table,
                name: name
            }
        })
        


        return order
    }
        
        
    }


export { CreateOrderService }