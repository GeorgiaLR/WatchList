import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { WatchingListService } from '../../services/watching-list/watching-list.service';

/**
 * Generated class for the AddWatchingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-watching-item',
  templateUrl: 'add-watching-item.html',
})
export class AddWatchingItemPage {

  item: Item = {
    name: "",
    type: "",
    status: "",
    episode: "",
    category: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private watching: WatchingListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWatchingItemPage');
  }

  addItem(item: Item){
    this.watching.addItem(item).then(ref => {
      this.navCtrl.setRoot('WatchingPage', {key: ref.key });
    })
  }
}
