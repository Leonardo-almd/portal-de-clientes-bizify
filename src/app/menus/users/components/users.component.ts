import { Component, ViewChild } from '@angular/core';
import { FormUsersComponent } from './form/form-users.component';
import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  @ViewChild(FormUsersComponent, { static: true })
  formModal!: FormUsersComponent;

  items = [
    {
      id: '01',
      name: 'Leonardo',
      email: 'leonardo@email.com',
      profile: 'Leonardo',
      cgc: '453.032.378-18',
      phone: '11 99152-3513',
      createdAt: '13/06/2023',
      updatedAt: '13/06/2023',
      acess: '2'
    },
  ];

  readonly columns: Array<any> = [
    { property: 'id', label: '#' },
    { property: 'name', label: 'Nome' },
    { property: 'email', label: 'E-mail' },
    { property: 'profile', label: 'Perfil' },
    { property: 'cgc', label: 'CGC' },
    { property: 'phone', label: 'Telefone' },
    { property: 'createdAt', label: 'Cadastrado em' },
    { property: 'updatedAt', label: 'Atualizado em' }
  ];

  readonly actions: Array<any> = [
    {
      action: this.onEditRow.bind(this),
      label: 'Editar',
      icon: 'po-icon po-icon-edit'
    },
    {
      action: () => {this.poDialog.confirm({
        title: 'Excluir',
        message: 'Deseja realmente apagar?',
        confirm: () => {
          alert('delete')
        }
      })
    },
      label: 'Excluir',
      icon: 'po-icon po-icon-delete',
      type: 'danger'
    }
  ]

  constructor(private poDialog: PoDialogService) {}

  ngOnInit() {}

  onEditRow( user ) {
    this.formModal.open(user);
  }

  public createNewUser() {
    this.formModal.open();
  }

  public generateLastUpdate() {
    const dataAtual = new Date();
    let horas: any = dataAtual.getHours();
    let minutos: any = dataAtual.getMinutes();
    horas = ('0' + horas).slice(-2);
    minutos = ('0' + minutos).slice(-2);
    const horarioAtual = horas + ':' + minutos;

    return horarioAtual;
  }
}
