import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface UserRequest {
    name: string,
    password: string,
    email: string

}

class CreateUserService {
    async execute({name, password, email}: UserRequest){
        if(!email){
            throw new Error("Email incorreto.");
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{ 
                email: email
            }
        })

        if (userAlreadyExists){
            throw new Error("Usuário já existe.");
            
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data:{
                email: email,
                password: passwordHash,
                name: name
            },
            select:{
                id: true,
                name:true,
                email:true
            }
        })

        return user;
    }
}

export { CreateUserService }