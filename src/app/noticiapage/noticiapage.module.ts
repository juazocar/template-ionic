import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiapagePageRoutingModule } from './noticiapage-routing.module';

import { NoticiapagePage } from './noticiapage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiapagePageRoutingModule
  ],
  declarations: [NoticiapagePage]
})
export class NoticiapagePageModule {}
