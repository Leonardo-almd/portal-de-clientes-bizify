import { NgModule } from '@angular/core';
import { PoModule } from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';
import { PoFieldModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';
import { PoModalPasswordRecoveryModule, PoPageLoginModule } from '@po-ui/ng-templates';
import { PoToolbarModule } from '@po-ui/ng-components';
import { PoMenuModule } from '@po-ui/ng-components';
import { PoPageModule } from '@po-ui/ng-components';
import { TrackComponent } from './components/track.component';
import { TrackRoutingModule } from './track-routing.module';



@NgModule({
  declarations: [TrackComponent],
  imports: [
    TrackRoutingModule,
    PoMenuModule,
    PoToolbarModule,
    PoPageModule,
    PoModalPasswordRecoveryModule,
    PoFieldModule,
    PoButtonModule,
    ReactiveFormsModule,
    PoPageLoginModule
  ]
})
export class TrackModule { }
