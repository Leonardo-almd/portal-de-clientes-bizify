import { Component } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {

  columns: Array<PoTableColumn> = [
    { property: 'nf', label: 'Núm. NF' },
    { property: 'cliente', label: 'Cliente' },
    { property: 'serie', label: 'Série' },
    { property: 'parcela', label: 'Parcela'},
    { property: 'valorTitulo', label: 'Valor do Título'},
    { property: 'valorAberto', label: 'Valor em Aberto'},
    { property: 'vencimento', label: 'Vencimento' },
    { property: 'status', label: 'Status' }
  ]

  referencesOptions = [
    {label: 'Referencias', value: '1234'}
  ]

  statusOptions = [
    {label: 'Liquidado', value: '1234'},
    {label: 'Parcial', value: '123'},
    {label: 'Aberto', value: '12'}
  ]

  constructor(){}

  ngOnInit() {}

  public onChangeSearch(){
    alert('enter')
  }


}
