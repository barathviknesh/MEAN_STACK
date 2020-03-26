import { Component, OnInit } from '@angular/core';
import { ServiceValidateComponent } from '../../services/service-validate.component'
import { FlashMessagesService } from 'angular2-flash-messages'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: string;

  constructor(private validateService: ServiceValidateComponent, 
              private flashMessage:FlashMessagesService,
              private authService:AuthService,
              private router: Router
              )

     { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user= {
          name :this.name,
          email :this.email,
          username :this.username,
          password :this.password
    }
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('please fill in all fields', {cssClass: 'alert-danger', timeout:3000});
      console.log("invalid name");
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('invaild email', {cssClass: 'alert-danger', timeout:3000});
      console.log("invalid email");
      return false;
    }

let success= true;

     // Register user
     this.authService.registerUser(user).subscribe(data => {
      if((data as any).success){
        this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });
  }

}
