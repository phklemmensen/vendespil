import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { LoginService } from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  userId = 'n/a';
  user: User = { 
    name:'John Doe'
  };

  constructor(private loginService: LoginService) {}

  onLogin():void {
    this.loginService.postLogin(this.user).subscribe(pip => this.userId = pip);

  }

  ngOnInit() {
  }

}
