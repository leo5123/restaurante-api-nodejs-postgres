import { Request, Response } from 'express'
import { DetailOrderService } from '../../services/order/DetailOrderService'

class DetailOrderController{
    async handle(req: Request, res: Response){
        const id = req.query.id as string
    
        const service = new DetailOrderService()
        const detail = await service.execute({id})

        return res.json(detail)
    }
}

export { DetailOrderController }