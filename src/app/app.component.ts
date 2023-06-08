import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kutyáidat sétáltatod?';
  name = 'Lajos';

  employee={
    name: 'Erős István',
    city: 'Szeged',
    salary: 576
  }

  employees=[
    {name:'Brancs Ádám', city:'Szolnok',salary:555},
    {name:'Ferenc', city:'Budapest',salary:633},
    {name:'Zoli', city:'Pécs',salary:587},
    {name:'Éva', city:'Eger',salary:122},
    {name:'Evelin', city:'Miskolc',salary:210},
  ]

  constructor(){
    this.kiir('henlo henlo sziasztok Nosika itt van')
  }
  kiir(msg:string){
    console.log(msg)
    console.log(this.employee.name)
  }
}
