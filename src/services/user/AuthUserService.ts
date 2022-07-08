import prismaClient from "../../prisma"
import { compare } from 'bcryptjs'
import { sign } from "jsonwebtoken"


interface AuthRequest{
    email: string,
    password: string
}

class AuthUserService {
    async execute({email, password}: AuthRequest){
      const user = await prismaClient.user.findFirst({ 
        where:{
            email: email
        }
      })
      if(!user){
        throw new Error("Email ou senha incorretos");
        
      }

      const passwordMatch = compare(password, user.password)

      if(!passwordMatch){
        throw new Error("Email ou senha incorretos");
      }

      const token = sign(
        { 
            email: email,
            password: password
        }, 
        process.env.jwt_secret,
        {
            subject: user.id,
            expiresIn: '30d'
        })

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        token: token}
    }


    
}

export { AuthUserService }