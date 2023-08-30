import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionpagePage } from './configuracionpage.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionpagePageRoutingModule {}
