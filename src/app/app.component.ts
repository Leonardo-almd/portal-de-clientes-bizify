import { Component } from '@angular/core';

import { PoDialogService, PoMenuItem, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';
import { AuthService } from './core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Dashboard', icon: 'po-icon po-icon-chart-area', link: '/dashboard' },
    { label: 'Consultar Faturas', icon: 'po-icon po-icon-search', link: '/invoice'},
    { label: 'Controle de Usuários', icon: 'po-icon po-icon-users', link: '/users' },
    { label: 'Meu Cadastro', icon: 'po-icon po-icon-user', link: '/profile'},
    // { label: 'Alterar senha', action: this.onClick.bind(this), icon: 'po-icon po-icon-user' },
    { label: 'Acompanhar Entrega', icon: 'po-icon po-icon-truck', link: '/track-delivery'},
    {label: 'Sair', icon: 'po-icon po-icon-exit', action: () => {this.poDialog.confirm({
      title: 'Sair',
      message: 'Deseja realmente sair?',
      confirm: () => {
        this.authService.logout()
      }
    });

    } }
  ];

  public readonly profile: PoToolbarProfile = {
    title: 'Nome do Usuário',
    subtitle: 'Email',
    avatar: ''
  };

  public readonly profileActions: PoToolbarAction[] = [
    { icon: 'po-icon po-icon-user', label: 'Meus dados', url: 'profile' },
    {
      icon: 'po-icon po-icon-exit',
      label: 'Sair',
      type: 'danger',
      separator: true,
      action: () => this.authService.logout()
    }
  ];


  constructor( public authService: AuthService, private poDialog: PoDialogService) {
  }

  ngOnInit() {
    if(localStorage.getItem('user')){
      this.authService.$authenticationState.next(true)
    }
  }
}
