import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../models/item/item.model";

@Injectable()
export class WatchingListService {
    
    private watchingListRef = this.db.list<Item>('watching-list');

    constructor(private db: AngularFireDatabase){
        
    }
  
    getWhatchingList() {
        console.log(this.watchingListRef);
        return this.watchingListRef;
    }

    getCategoryLenght(category){

    }

    addItem(item:Item) {
        return this.watchingListRef.push(item);
    }

}