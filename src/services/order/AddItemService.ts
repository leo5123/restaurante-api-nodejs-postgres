import prismaClient from "../../prisma";

interface AddItemInterface {
    amount: number,
    order_id: string,
    product_id: string

}

class AddItemService{
    async execute({amount, order_id, product_id}: AddItemInterface){

        const add = prismaClient.item.create({
            data:{
                amount: amount,
                order_id: order_id,
                product_id: product_id
            }
        })

        return add
    }
}

export { AddItemService }