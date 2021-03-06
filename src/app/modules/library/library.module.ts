import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { DefaultComponent } from './pages/default/default.component';
import { LibraryRoutingModule } from './library.routing';
import { MomentModule } from 'ngx-moment';
import { ListComponent } from './pages/list/list.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { CollectionComponent } from './pages/collections/collections.component';

@NgModule({
  declarations: [DefaultComponent, ListComponent, CollectionComponent],
  imports: [SharedModule, LibraryRoutingModule, MomentModule, VirtualScrollerModule],
  exports: [],
  entryComponents: [],
})
export class LibraryModule {}
