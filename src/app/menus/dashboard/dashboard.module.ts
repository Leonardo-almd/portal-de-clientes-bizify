import { NgModule } from '@angular/core';
import { PoModule } from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';
import { PoFieldModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';
import { PoModalPasswordRecoveryModule, PoPageLoginModule } from '@po-ui/ng-templates';
import { PoToolbarModule } from '@po-ui/ng-components';
import { PoMenuModule } from '@po-ui/ng-components';
import { PoPageModule } from '@po-ui/ng-components';
import { DashboardComponent } from './components/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PoContainerModule } from '@po-ui/ng-components';
import { PoTableModule } from '@po-ui/ng-components';
import { PoDividerModule } from '@po-ui/ng-components';
import { PoChartModule } from '@po-ui/ng-components';
import { PoAccordionModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutingModule,
    PoAccordionModule,
    PoChartModule,
    PoDividerModule,
    PoTableModule,
    PoContainerModule,
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
export class DashboardModule { }
