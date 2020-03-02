import { Component, OnInit } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignUp(form:NgForm){
    const email= form.value.email;
    const password = form.value.password;

    this.authService.signupUser(email, password);
  }

}
