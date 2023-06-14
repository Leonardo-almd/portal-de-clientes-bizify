import { Component, ViewChild } from '@angular/core';
import { PoStepperComponent, PoStepperStatus } from '@po-ui/ng-components';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent {
  @ViewChild(PoStepperComponent) poStepperComponent?: PoStepperComponent;

  search: any = null

  readonly steps = [
    { label: 'Pedido Realizado', status: PoStepperStatus.Default },
    { label: 'Pedido Pago', status: PoStepperStatus.Active },
    { label: 'A Enviar', status: PoStepperStatus.Disabled },
    { label: 'A Receber', status: PoStepperStatus.Done },
    { label: 'A Avaliar', status: PoStepperStatus.Error },
  ];


  // ngOnInit() {
  //   setTimeout(() => this.activeStep());
  // }

  public searchOrder(ev: string) {
    console.log(ev)
    setTimeout(() => this.activeStep());
    this.search = ev
  }


  public activeStep() {
    this.poStepperComponent?.active(3);
  }
}
