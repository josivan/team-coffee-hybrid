import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FabToolbar } from './components/fab-toolbar/fab-toolbar';
import { RankingComponent } from './components/ranking/ranking.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FabToolbar,
    RankingComponent,
    MessagesComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FabToolbar,
    RankingComponent,
    MessagesComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
