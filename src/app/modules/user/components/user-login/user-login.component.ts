import { Component } from '@angular/core';
import { Login } from 'src/app/core/models/user.model';
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
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {

  constructor(
    private userService: UserService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.initForm();
  }

  errorIcon = faCircleXmark;
  checkIcon = faCircleCheck;
  warningIcon = faTriangleExclamation;
  sucessIcon = faUserCheck;
  arrow = faArrowLeft;

  loginError = '';
  submitSuccess: boolean = false;
  submitError: boolean = false;
  refresh: number = 0;
  
  user: Login = {
    username: '',
    mail: '',
  };

  form = new FormGroup({
    username: new FormControl(),
    mail: new FormControl(),
  });

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
      mail: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}'),
        ],
      ],
    });
  }

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
        mail: this.form.value.mail.toLowerCase(),
      };
      console.log(this.user)
      if (localStorage.getItem('user')) {
        let userStorage = localStorage.getItem('user');
        let userData = userStorage && JSON.parse(userStorage);
        if (this.user.username !== userData.username) {
          this.loginError = 'nameError';
        }
        setTimeout(() => {
          this.loginError = '';
        }, 5000);
        if (this.user.mail !== userData.mail) {
          this.loginError = 'mailError';
        }
        setTimeout(() => {
          this.loginError = '';
        }, 5000);
        if (
          this.user.username === userData.username &&
          this.user.mail === userData.mail &&
          userData.admin === 0
        ) {
          userData.state = 'connected';
          localStorage.setItem('user', JSON.stringify(userData));
          this.userService.refresh.emit(2);
          this.userService.isAdminLogged.next(true);
          this.submitSuccess = true;
          setTimeout(() => {
            this.route.navigate(['/home']);
            this.submitSuccess = false;
          }, 2000);
        }
        if (
          this.user.username === userData.username &&
          this.user.mail === userData.mail &&
          userData.admin === false
        ) {
          userData.admin = true;
          userData.state = 'connected';
          localStorage.setItem('user', JSON.stringify(userData));
          this.userService.refresh.emit(2);
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
