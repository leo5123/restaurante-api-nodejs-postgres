

import { Request, Response } from "express";
import { CreateProductService } from '../../services/product/CreateProductService'
class CreateProductController{
    async handle(req: Request, res: Response){
        const { name, price, description, id_category, banner} = req.body;
        const createProdcutService = new CreateProductService();
        
        if(!req.file){
            throw new Error("Requer foto do produto");
            
        }else{
             
            const { originalname, filename: banner } = req.file

            const product = await createProdcutService.execute({name, price, description, id_category, banner});
    
            return res.json(product)
        }

       
    }   
}

export { CreateProductController }