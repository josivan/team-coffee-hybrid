import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FabToolbar } from './components/fab-toolbar/fab-toolbar';
import { RankingComponent } from './components/ranking/ranking.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FabToolbar,
    RankingComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FabToolbar,
    RankingComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
