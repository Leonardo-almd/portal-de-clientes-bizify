import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PoDialogService, PoModalComponent } from '@po-ui/ng-components';
import { PoModalPasswordRecovery, PoModalPasswordRecoveryComponent, PoPageLoginCustomField, PoPageLoginLiterals, PoPageLoginRecovery } from '@po-ui/ng-templates';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild(PoModalPasswordRecoveryComponent) poModalPasswordRecovery?: PoModalPasswordRecoveryComponent;

  public readonly customLiterals: PoPageLoginLiterals = {
    loginPlaceholder: 'Digite seu e-mail',
    passwordPlaceholder: 'Digite sua senha',
    welcome: 'Acesso exclusivo para clientes',
    submitLabel: 'Entrar'
  };

  public readonly environmentName: PoPageLoginCustomField = {
    placeholder: 'Informe o nome do ambiente',
    property: 'environmentName'
  };


  constructor(
    private poDialog: PoDialogService,
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  public loginSubmit(event: any) {
    console.log(event)
    localStorage.setItem('password', event.password)
    console.log(this.router.config)
    this.router.navigate(['dashboard'])
  }

  public onRecoveryPassword(): void {
    if (!this.environmentName.value) {
      return this.poDialog.alert({ message: 'Informe o nome do ambiente', title: 'Atenção' });
    }
    this.poModalPasswordRecovery?.open();
  }

  public onSendCodeRecovery(event: PoModalPasswordRecovery): void {
    // this.authService
    //   .requestResetPassword(this.environmentName.value.toString().toLowerCase(), event.email.toLowerCase())
    //   .subscribe({
    //     next: () => {
    //       this.poDialog.alert({
    //         title: 'Link enviado por e-mail',
    //         message: `Link de recuperação de senha enviado para: ${event.email.toLowerCase()}`,
    //         ok: () => {}
    //       });
    //     },
    //     error: err => {
    //       this.poDialog.alert({
    //         title: 'Erro ao recuperar senha',
    //         message: `Não foi possível enviar o link de recuperação, entre em contato com o suporte`,
    //         ok: () => {}
    //       });
    //     },
    //     complete: () => {
    //       this.poModalPasswordRecovery.completed();
    //     }
    //   });
  }

}
