import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { DefaultComponent } from './pages/default/default.component';
import { RoutingModule } from './landing.routing';

@NgModule({
  declarations: [DefaultComponent],
  imports: [SharedModule, RoutingModule],
  exports: [],
  entryComponents: [],
})
export class LandingModule {}
