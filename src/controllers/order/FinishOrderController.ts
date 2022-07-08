import { Request, Response } from 'express'
import { FinishOrderService } from '../../services/order/FinishOrderService'

class FinishOrderController{
    async handle(req: Request, res: Response){
        const { id } = req.body

        const service = new FinishOrderService()
        const finish = await service.execute({id})

        return res.json(finish)
    }
}

export { FinishOrderController }