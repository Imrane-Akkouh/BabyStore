import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  isUser(){
    return (this.authService.isAuthenticated() && this.authService.isUser());
  }

  isAdmin(){
    return (this.authService.isAuthenticated() && this.authService.isAdmin());
  }

}
