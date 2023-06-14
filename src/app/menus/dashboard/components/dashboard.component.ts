import { Component } from '@angular/core';
import {
  PoChartOptions,
  PoChartSerie,
  PoChartType,
  PoDatepickerRange,
  PoNotificationService,
  PoTableColumn,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  columns: Array<PoTableColumn> = [
    { property: 'nf', label: 'Núm. NF' },
    { property: 'cliente', label: 'Cliente' },
    { property: 'serie', label: 'Série' },
    { property: 'vencimento', label: 'Vencimento' },
    { property: 'status', label: 'Status' },
    { property: 'valor', label: 'Valor' },
    { property: 'valorAberto', label: 'Valor em Aberto' },
  ];

  optionsColumn: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 100,
      gridLines: 6,
    },
  };

  qtdMonthsAmount: any;
  qtdMonthsNF: any;
  data = [91, 40, 42, 20, 10, 11, 70, 65];
  dataAmount = this.data;
  dataQtd = this.data;
  maxDate = new Date();
  startDate!: string;

  amountLastFewMonths: Array<PoChartSerie> = [
    { label: 'NF-e', data: this.dataAmount, type: PoChartType.Column },
  ];

  qtdLastFewMonths: Array<PoChartSerie> = [
    { label: 'NF-e', data: this.dataQtd, type: PoChartType.Column },
  ];

  constructor(public poNotification: PoNotificationService) {}

  ngOnInit() {
    const currentDate = new Date();

    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 5);

    const currentDateString = currentDate.toISOString().split('T')[0];
    const startDateString = startDate.toISOString().split('T')[0];

    const objectDate = {
      start: startDateString,
      end: currentDateString,
    };
    this.startDate = objectDate.start
    this.getFormattedMonths(objectDate, 'qtd - amount')
  }

  public onChangeSearch(ev: string) {

  }

  public getFormattedMonths(obj: any, type: string): any {
    console.log(obj)
    if (obj.start && obj.end) {
      const startDate = new Date(obj.start.replace(/-/g, '/'));
      const endDate = new Date(obj.end.replace(/-/g, '/'));

      let diffMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
      diffMonths -= startDate.getMonth();
      diffMonths += endDate.getMonth();

      if (diffMonths >= 6) {
        this.poNotification.warning('Intervalo permitido de no máximo 6 meses')
        return
      }

      const formattedMonths = [];

      const options: any = { month: 'short', year: 'numeric' };

      while (
        startDate < endDate ||
        startDate.getMonth() === endDate.getMonth()
      ) {
        formattedMonths.push(startDate.toLocaleDateString('pt-BR', options));
        startDate.setMonth(startDate.getMonth() + 1);
      }

      if (type == 'amount') {
        this.qtdMonthsAmount = formattedMonths;
        this.dataAmount = this.data.slice(0, formattedMonths.length);
        this.amountLastFewMonths[0].data = this.dataAmount;
      }

      if (type == 'qtd') {
        this.qtdMonthsNF = formattedMonths;
        this.dataQtd = this.data.slice(0, formattedMonths.length);
        this.qtdLastFewMonths[0].data = this.dataQtd;
      }

      if(type == 'qtd - amount') {
        this.qtdMonthsAmount = formattedMonths;
        this.dataAmount = this.data.slice(0, formattedMonths.length);
        this.amountLastFewMonths[0].data = this.dataAmount;
        this.qtdMonthsNF = formattedMonths;
        this.dataQtd = this.data.slice(0, formattedMonths.length);
        this.qtdLastFewMonths[0].data = this.dataQtd;
      }
    }
  }

  public datePicker(date: any) {
    console.log(date);
  }

}
