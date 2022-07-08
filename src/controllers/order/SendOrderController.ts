import { Request, Response } from 'express'
import { SendOrderService } from '../../services/order/SendOrderService'

class SendOrderController {
    async handle(req: Request, res: Response) {
        const { id } = req.body
        
        const service = new SendOrderService()
        const send = await service.execute({id})

        return res.json(send)
    
    }
}

export { SendOrderController }