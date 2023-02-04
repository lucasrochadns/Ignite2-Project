import { Category } from "../model/Category";
import { ICreateCategoryDTO } from "../dto/ICreateCategoryDTO";

class CategorieRepository{
     
     private categories: Category[];

     constructor(){
        this.categories = [];
     }
    
    create({ name, description }: ICreateCategoryDTO): void{
        //Object.assign(category, {name, description, created_at: new Date()}); -> developer work around JS
        
        this.categories.push(new Category(name, description, new Date()));
    }

    findAll(): Category[]
    {
        return  this.categories;
    };

    findByName(name: string): Category{
       const category =  this.categories.find(category => category.getName() === name);
       return category;
    }
}

export { CategorieRepository };