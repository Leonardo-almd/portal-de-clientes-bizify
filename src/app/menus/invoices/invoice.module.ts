import { NgModule } from '@angular/core';
import { PoModule } from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';
import { PoFieldModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';
import { PoModalPasswordRecoveryModule, PoPageLoginModule } from '@po-ui/ng-templates';
import { PoToolbarModule } from '@po-ui/ng-components';
import { PoMenuModule } from '@po-ui/ng-components';
import { PoPageModule } from '@po-ui/ng-components';
import { InvoiceComponent } from './components/invoice.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { PoTableModule } from '@po-ui/ng-components';
import { PoContainerModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [InvoiceComponent],
  imports: [
    InvoiceRoutingModule,
    PoContainerModule,
    PoTableModule,
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
export class InvoiceModule { }
