import prismaClient from "../../prisma";

    interface ProductInterface{
        name: string,
        price: string,
        description: string,
        id_category: string,
        banner: string
    }

class CreateProductService{
    async execute({ name, price, description, id_category, banner }: ProductInterface){
        
        const productCreation = await prismaClient.product.create({
            data:{
                name: name,
                price: price,
                description: description,
                id_category: id_category,
                banner: banner
            }
        })
        return productCreation
    }
}

export { CreateProductService } 