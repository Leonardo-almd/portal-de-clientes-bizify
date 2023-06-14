import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {
  PoModalPasswordRecovery,
  PoModalPasswordRecoveryComponent,
} from '@po-ui/ng-templates';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @ViewChild(PoModalPasswordRecoveryComponent)
  poModalPasswordRecovery?: PoModalPasswordRecoveryComponent;

  form;
  formPassword;
  defaultFormValue;
  defaultFormPasswordValue;

  constructor(
    private formBuilder: FormBuilder,
    public poNotification: PoNotificationService
  ) {
    this.form = this.formBuilder.group({
      name: new FormControl(null, Validators.required),
      cgc: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null),
      emailSecondary: new FormControl(null),
    });
    this.formPassword = this.formBuilder.group({
      currentPassword: new FormControl(null, Validators.required),
      newPassword: new FormControl(null, Validators.required),
      confirmNewPassword: new FormControl(null, Validators.required),
    });
    this.defaultFormPasswordValue = this.formPassword.value;
    this.defaultFormValue = this.form.value;
  }

  ngOnInit() {
    this.form.reset(this.defaultFormValue);
    this.formPassword.reset(this.defaultFormPasswordValue);
    this.form.get('cgc').setValue('45303237818');
    this.form.get('email').setValue('leo@email.com');
  }

  public savePassword() {
    const payload = this.formPassword.value;
    if (payload.newPassword == payload.confirmNewPassword) {
      if (payload.newPassword !== payload.currentPassword) {
        // endpoint salvar senha
        this.poNotification.success('Senha atualizada com sucesso')
      } else {
        this.poNotification.warning('A nova senha deve ser diferente da senha atual')
      }
    } else {
      this.poNotification.warning('A nova senha deve ser igual no dois campos');
    }
  }

  public passwordRecovery() {
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
