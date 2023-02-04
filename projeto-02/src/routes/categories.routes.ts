import { Router } from 'express';
import { ICreateCategoryDTO } from '../dto/ICreateCategoryDTO';
import { CategorieRepository } from '../repositories/CategorieRepository';

const categoriesRoutes = Router();
const categoryRepository: CategorieRepository = new CategorieRepository();



categoriesRoutes.post("/", (request, response) => 
  {
     const { name, description } = request.body;
     const categoryAlreadyExists = categoryRepository.findByName(name);
     if(!categoryAlreadyExists){
       categoryRepository.create({name, description});
     }
     
     return response.status(400).json({message: "Category Already Exists "});
  }
);

categoriesRoutes.get("/", (request, response) => 
  {
     const categpryDTO: ICreateCategoryDTO[] = [...categoryRepository.findAll()];
     response.status(200).json(categpryDTO);
  }
);


export{ categoriesRoutes };