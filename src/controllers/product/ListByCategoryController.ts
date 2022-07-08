import { Request, Response } from 'express'
import { ListByCategoryService } from '../../services/product/ListByCategoryService'

class ListByCategoryController{
    async handle(req: Request, res: Response){
        const id_category = req.query.id_category as string

        const List = new ListByCategoryService()
        const ListExecute = await List.execute({id_category})

        return res.json(ListExecute)

    }
}

export { ListByCategoryController }