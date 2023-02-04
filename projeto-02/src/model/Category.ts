import { uuid } from 'uuidv4';

class Category{
   
    private id?: string;
    private name: string;
    private description: string;
    private created_at: Date;

    constructor(name: string, description: string, created_at: Date){
       if(!this.id){
          this.id = uuid();
       }
       this.name = name;
       this.description = description;
       this.created_at = created_at;
    }
    
    getId(){return this.id;}; 
    // database and an array because of this, setId not implemented
    getName(){return this.name;};
    setName(name: string){this.name = name;};
    getDescription(){return this.description;}
    setDescription(description: string){return this.description};
    getCreated_at(){return this.created_at;};
    setCreated_at(created_at: Date){this.created_at = created_at;};

   
}
export {Category};