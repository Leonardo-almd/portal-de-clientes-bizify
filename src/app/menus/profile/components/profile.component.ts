import { Component, ViewChild } from '@angular/core';
import { PoModalPasswordRecovery, PoModalPasswordRecoveryComponent } from '@po-ui/ng-templates';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @ViewChild(PoModalPasswordRecoveryComponent) poModalPasswordRecovery?: PoModalPasswordRecoveryComponent;

  public test() {
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
