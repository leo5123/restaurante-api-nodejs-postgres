import { Request, Response } from 'express'
import { removerOrderService } from '../../services/order/RemoveOrderService'

class RemoveOrderController{
    async handle(req: Request, res: Response){
        const id = req.query.id as string
        
        const call = new removerOrderService()
        const remove = await call.execute({id})
        
        return res.json(remove)
    }
}

export { RemoveOrderController }