import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login, User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user/user.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import {
  faCircleXmark,
  faTriangleExclamation,
  faUserCheck,
  faCircleCheck,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent {

  constructor(
    private userService: UserService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(16),
          Validators.pattern('[a-zA-Z0-9]*'),
        ],
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(16),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(16),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      mail: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}'),
        ],
      ],
      dni: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{1,3}[0-9]{3,3}[0-9]{3,3}$'),
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^([+]{1})?([ |54]{1,3})?[0-9 ]{12}'),
        ],
      ],
      admin: [''],
      state: [''],
    });
  }

  user: User = {
    username: '',
    name: '',
    lastname: '',
    mail: '',
    dni: '',
    phone: '',
    state: '',
    admin: '',
  };

  form = new FormGroup({
    username: new FormControl(),
    name: new FormControl(),
    lastname: new FormControl(),
    mail: new FormControl(),
    dni: new FormControl(),
    phone: new FormControl(),
    admin: new FormControl(),
    state: new FormControl(),
  });

  errorIcon = faCircleXmark;
  checkIcon = faCircleCheck;
  warningIcon = faTriangleExclamation;
  sucessIcon = faUserCheck;
  arrow = faArrowLeft;

  showLogin: boolean = false;
  submitSuccess: boolean = false;
  submitError: boolean = false;

  refresh: number = 0;

  registerError: string = '';
  loginError: string = '';


  onSubmit(order: string) {
    if (order === 'error') {
      this.submitError = true;
      setTimeout(() => {
        this.submitError = false;
      }, 5000);
    }
    if (order === 'submit') {
      this.user = {
        username: this.form.value.username.toLowerCase(),
        name: this.form.value.name.toLowerCase(),
        lastname: this.form.value.lastname.toLowerCase(),
        mail: this.form.value.mail.toLowerCase(),
        dni: this.form.value.dni,
        phone: this.form.value.phone,
        state: this.form.value.state,
        admin: this.form.value.admin,
      };
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);

      if (this.user) {
        if (this.user.admin === '') {
          this.user.admin = 0;
        }
        if (localStorage.getItem('user')) {
          let userStorage = localStorage.getItem('user');
          let userData = userStorage && JSON.parse(userStorage);
          if (this.user.mail === userData.mail) {
            this.registerError = 'mailError';
          }
          setTimeout(() => {
            this.registerError = '';
          }, 5000);
          if (this.user.dni === userData.dni) {
            this.registerError = 'dniError';
          }
          setTimeout(() => {
            this.registerError = '';
          }, 5000);
          if (this.user.username === userData.username) {
            this.registerError = 'usernameError';
          }
          setTimeout(() => {
            this.registerError = '';
          }, 5000);
          if (
            this.user.mail !== userData.mail &&
            this.user.dni !== userData.dni &&
            this.user.username !== userData.username
          ) {
            localStorage.removeItem('user');
            this.user.state = 'connected';
            localStorage.setItem('user', JSON.stringify(this.user));
            this.userService.refresh.emit(1);
            this.submitSuccess = true;
            setTimeout(() => {
              this.route.navigate(['/home']);
              this.submitSuccess = false;
            }, 2000);
          }
        } else {
          this.user.state = 'connected';
          localStorage.setItem('user', JSON.stringify(this.user));
          this.userService.refresh.emit(1);
          this.submitSuccess = true;
          setTimeout(() => {
            this.route.navigate(['/home']);
            this.submitSuccess = false;
          }, 2000);
        }
      }
    }
  }

}
