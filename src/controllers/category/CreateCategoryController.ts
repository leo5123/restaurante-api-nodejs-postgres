import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController{
    async handle(req: Request, res: Response){

        const { name } = req.body

        const aba = await new CreateCategoryService()

        const user = await aba.execute({name})
        
        return res.json(user)
    }
}

export { CreateCategoryController }