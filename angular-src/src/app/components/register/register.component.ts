import { Component, OnInit } from '@angular/core';
import { ServiceValidateComponent } from '../../services/service-validate.component'
import { FlashMessagesService } from 'angular2-flash-messages'


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

  constructor(private validateService: ServiceValidateComponent, private flashMessage:FlashMessagesService) { }

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

  }

}
