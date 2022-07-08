import { Request, Response } from "express";
import { ListOrderService } from "../../services/order/ListOrderService";

class ListOrderController {
    async handle(req: Request, res: Response){
        const service = new ListOrderService()
        const list = await service.execute()
    
        return res.json(list)
    }
}

export { ListOrderController }