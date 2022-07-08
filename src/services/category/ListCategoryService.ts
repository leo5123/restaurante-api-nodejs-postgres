import prismaClient from "../../prisma"



class ListCategoryService{
    async execute(){
        
        const listCategory = prismaClient.category.findMany({
            select:{
                name:true,
                id: true
            }
            

        })

        return listCategory
    }
}

export { ListCategoryService }