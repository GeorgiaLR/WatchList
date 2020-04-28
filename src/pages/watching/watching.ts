import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WatchingListService } from '../../services/watching-list/watching-list.service';
import { Observable } from 'rxjs';
import { Item } from '../../models/item/item.model';

/**
 * Generated class for the WatchingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-watching',
  templateUrl: 'watching.html',
})
export class WatchingPage {

  watchingList$: Observable<Item[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private watching: WatchingListService) {
      this.watchingList$ = this.watching
      .getWhatchingList() // DB List
      .snapshotChanges() // Key and Value
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, 
            ...c.payload.val()
          }));
        });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WatchingPage');
  }

}
