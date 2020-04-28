import { Component } from '@angular/core';

import { WatchingPage } from "../watching/watching";
import { LibraryPage } from '../library/library';

@Component ({
    selector: 'page-tabs',
    template: `
        <ion-tabs>
            <ion-tab [root]="watchingPage" tabTitle="Watching" tabIcon="logo-youtube"></ion-tab>
            <ion-tab [root]="libPage" tabTitle="Library" tabIcon="list"></ion-tab>
        </ion-tabs>
    `
})

export class TabsPage {
    watchingPage = WatchingPage;
    libPage = LibraryPage;
}