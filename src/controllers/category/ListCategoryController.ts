import { Request, Response } from 'express'
import { ListCategoryService } from '../../services/category/ListCategoryService';



class ListCategoryController{
    async handle(req: Request ,res: Response){
        
        
      const a = new ListCategoryService()

      const user = await a.execute()
       
      res.json(user);
    }
}

export { ListCategoryController }