import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl,  FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user : any ={};
  constructor(private formBuilder:FormBuilder){

  }
ngOnInit(): void {
    
}
registerForm = new FormGroup({
  name : new FormControl(""),
  surname : new FormControl(""),
  phoneNo : new FormControl(""),
  email : new FormControl(""),
  password : new FormControl("")
})

kullaniciEkle(user:string[]){
  let users = [];
  if(localStorage.getItem('Kullanicilar')){
    users = JSON.parse(localStorage.getItem('Kullanicilar')|| '[]');
  }
  users.push(user);
  localStorage.setItem('Kullanicilar', JSON.stringify(users));
  this.user = Object.assign(this.user, this.registerForm.value);
      localStorage.setItem('Kullanicilar',JSON.stringify(this.user));
}

}
