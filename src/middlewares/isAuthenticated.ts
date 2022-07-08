import { Request, Response, NextFunction } from "express";

import { verify } from 'jsonwebtoken'

interface Payload{
    sub: string
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    
    const authToken = req.headers.authorization

    
    const cut = authToken.split(' ')
    
    if(!authToken){
        res.status(401).end()
    }
    
    const [, token] = cut

    

    try {
        const { sub } = verify( 
            token,
            process.env.jwt_secret
            ) as Payload;

            console.log(sub)
            req.user_id = sub
            
            return next()
    } catch (error) {
        res.status(401).end()
        
    }

}