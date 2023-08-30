import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionpagePageRoutingModule } from './configuracionpage-routing.module';

import { ConfiguracionpagePage } from './configuracionpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionpagePageRoutingModule
  ],
  declarations: [ConfiguracionpagePage]
})
export class ConfiguracionpagePageModule {}
