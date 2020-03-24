import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-service-validate',
  templateUrl: './service-validate.component.html',
  styleUrls: ['./service-validate.component.css']
})
export class ServiceValidateComponent implements OnInit {

  constructor() { 

  
}

validateRegister(user){
  if(user.name == undefined || user.email == undefined || user.password == undefined || user.username == undefined ){
  return false;
}
else{
  return true;
}
};


validateEmail(email){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

ngOnInit() {
}
}
  

