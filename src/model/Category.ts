
import { v4 as uuidV4 } from 'uuid';

class Category {
    _id?: string;
    name: string;
    description: string;
    created_at: Date;

    constructor(){
        if(!this._id){
            this._id = uuidV4();
        }
    }
}



export { Category }