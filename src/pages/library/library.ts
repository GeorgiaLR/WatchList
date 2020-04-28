import { Component, OnInit } from '@angular/core';
import { Item } from '../../data/items.interface';
import items from '../../data/items';
import { ItemsPage } from '../items/items';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  itemCollection:{category: string, items: Item[], icon: string}[];
  itemsPage = ItemsPage;

  ngOnInit(){
    this.itemCollection = items;
  }
}
