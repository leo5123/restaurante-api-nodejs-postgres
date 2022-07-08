import { Request, Response } from 'express' 
import { RemoveItemService } from '../../services/order/RemoveItemService'

class RemoveItemController {
    async handle(req: Request, res: Response){
        const id = req.query.id as string
    
        const service = new RemoveItemService()
        const remove = await service.execute({id})

        res.json(remove)
    }
}

export { RemoveItemController }