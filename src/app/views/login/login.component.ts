import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

//Services
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailCtrl = new FormControl('', [Validators.required, Validators.email]);
  passwordCtrl = new FormControl('', [Validators.required]);

  constructor(
    private auth: AuthService
  ) {
    this.emailCtrl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => console.log(value))

    this.passwordCtrl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => console.log(value))
  }

  ngOnInit(): void {
  }

  LogIn(event: Event) {
    event.preventDefault();
    this.auth.SignIn(this.emailCtrl.value, this.passwordCtrl.value)
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        if (data.status) {
          this.auth.setToken(data.data);
          window.location.replace('/');
        }
      });
  }

}
