import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';


import { SQLite} from '@awesome-cordova-plugins/sqlite/ngx'
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './services/authentication.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SQLite, AuthGuard,
    AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
