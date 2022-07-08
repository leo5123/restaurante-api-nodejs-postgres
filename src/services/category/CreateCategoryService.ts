import prismaClient from "../../prisma"

interface categoryInterface {
    name: string
}

class CreateCategoryService{
    async execute({name}: categoryInterface){
        
        if(name === ''){
            throw new Error("Nome inválido");
            
        }


        const categoryAlreadyCreated = await prismaClient.category.findFirst({
            where:{
                name: name
            }
        })

        if(categoryAlreadyCreated) {
            throw new Error("Categoria já existe");
            
        }

        const createCategory = await prismaClient.category.create({
            data:{
                name: name
            }, select:{
                name: true
            }
        }) 

        
        return createCategory
    }
}

export { CreateCategoryService }