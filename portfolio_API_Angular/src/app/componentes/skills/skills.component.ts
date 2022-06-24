import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class skillsComponent implements OnInit {
  
  skillList: any=[
    {
    "habilidad":"Diseñador web",
    "img":"./assets/front2.png"
},
{
    "habilidad":"Front end",
    "img":"./assets/ang2.png"
},
{
    "habilidad":"Front end",
    "img":"../assets/node2.png"
},
{
    "habilidad":"Hoisting",
    "img":"../assets/git2.png"
},
{
    "habilidad":"Idiomas x 3",
    "img":"../assets/idioms.png"
},
{
    "habilidad":"Conversational skills",
    "img":"../assets/grupal.png"
}
]
  constructor(public router: Router) { }

  ngOnInit(): void {
  

  }

  redirect() {
    this.router.navigate(['crear-skill']);  
  }

}
 