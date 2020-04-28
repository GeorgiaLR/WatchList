import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Item } from "../../data/items.interface";
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the ItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage implements OnInit {
  itemGroup:{category: string, items: Item[], icon: string};
  
  constructor(private navParams: NavParams, private iab: InAppBrowser) {
    
  }

  ngOnInit(){
    this.itemGroup = this.navParams.data;
  }

  onSearch(name: string){
    const browser = this.iab.create('https://www.google.com/search?q=synopsis+'+name);
    browser.show();
  }

}
