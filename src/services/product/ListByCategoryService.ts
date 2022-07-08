import prismaClient from '../../prisma'

interface ListByCategoryServiceInterface{
    id_category: string,
}

class ListByCategoryService {
    async execute({id_category}: ListByCategoryServiceInterface){
        const Create = prismaClient.product.findMany({
            where: {
                id_category: id_category
            }
        })
        return Create    
    }
}

export { ListByCategoryService }