import { NgModule } from '@angular/core';
import { PoModule } from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';
import { PoFieldModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';
import { PoModalPasswordRecoveryModule, PoPageLoginModule } from '@po-ui/ng-templates';
import { PoToolbarModule } from '@po-ui/ng-components';
import { PoMenuModule } from '@po-ui/ng-components';
import { PoPageModule } from '@po-ui/ng-components';
import { UsersComponent } from './components/users.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    UsersRoutingModule,
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
export class UsersModule { }
