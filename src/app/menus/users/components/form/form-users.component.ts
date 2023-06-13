import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.scss'],
})
export class FormUsersComponent {
  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;

  title!: string;
  objectId!: string;

  form: any = [];
  defaultFormValue: any;
  passwordRequired = true;

  constructor(private formBuilder: FormBuilder, public poNotification: PoNotificationService) {
    this.form = this.formBuilder.group({
      name: new FormControl(null, Validators.required),
      cgc: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null),
      acess: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
    });
    this.defaultFormValue = this.form.value;
  }

  ngOnInit() {
    this.form.valueChanges.subscribe((newValue: any) => {
      if (!this.form.invalid) {
        this.onPrimaryAction.disabled = false;
      } else {
        this.onPrimaryAction.disabled = true;
      }

    });
  }

  public open(user: any = null) {
    this.form.reset(this.defaultFormValue);
    if (user) {
      this.title = 'Editar usuário';
      this.objectId = user.id;
      const passwordControl = this.form.get('password');
      const confirmPasswordControl = this.form.get('confirmPassword');
      if (passwordControl && confirmPasswordControl) {
        passwordControl.clearValidators();
        confirmPasswordControl.clearValidators();
        passwordControl.updateValueAndValidity();
        confirmPasswordControl.updateValueAndValidity();
      }
      this.passwordRequired = false;

      this.form.get('name').setValue(user.name);
      this.form.get('cgc').setValue(user.cgc);
      this.form.get('email').setValue(user.email);
      this.form.get('phone').setValue(user.phone);
      this.form.get('acess').setValue(user.acess);
    } else {
      this.title = 'Criar novo usuário';
    }
    this.poModal.open();
  }

  readonly onPrimaryAction: PoModalAction = {
    action: () => {
      if(this.form.value.password || this.form.value.confirmPassword){
        if (this.form.value.password == this.form.value.confirmPassword){
          this.poModal.close();
        } else {
          this.poNotification.warning('A senha deve ser igual nos dois campos')
        }
      } else {
        this.poModal.close()
      }

    },
    label: 'Salvar',
    disabled: true,
  };

  readonly onSecondaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancelar',
  };
}
