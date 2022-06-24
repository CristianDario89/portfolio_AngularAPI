import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
public form!:FormGroup;
users:any= [
  { "userId":"lucas", "password":"alario", "id":1 }, 
  { "userId":"lucas2", "password":"alario2", "id":2 }
];
   constructor( private formBuilder: FormBuilder,
                private ruta: Router,
                private http: HttpClient) {}

  ngOnInit(): void {

   this.form = this.formBuilder.group({
      userId:['', Validators.required],
      password:['', Validators.required],
    });

   
  }

  userLogin(data:any) {
  
      if(data.userId) {
         this.users.forEach((item:any) => {
           
          if(item.userId === data.userId && item.password === data.password){
            alert("login exitoso bro");
            
            localStorage.setItem("isLoggedIn","true");
            this.form.reset();
            this.ruta.navigate(['portfolio'])
          }else{
            console.log('usuario INvalido bro');
            localStorage.clear();
          }

         });
      }else{
        alert("no funca pa");
      }
   
  
  }

 
  /*
   get Email(){
     return this.form.get('email');
   }
 
   get Password(){
     return this.form.get('password');
   }
  
   */

}
