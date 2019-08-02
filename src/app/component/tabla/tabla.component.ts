import { Component, OnInit } from '@angular/core';
import { autosA } from './tabla.interface';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  Guardar: string = "Salvar";
  constructor() { }

  ngOnInit() {
    this.autosd.forEach(element => {
      if(element.velocidad<80){
        element.velocidad=null;
      } 
    });
  }

  
autosd : autosA[] = [
  {
    "id":1,
    "fecha":"2019-06-01",
    "modelo":"Chevrolet",
    "velocidad":90,
    "patente":"JDV 511"
  },
  {
    "id":2,
    "fecha":"2019-02-10",
    "modelo":"Ford",
    "velocidad":120,
    "patente":"AA 651 AA"
  },
  {
    "id":3,
    "fecha":"2019-03-29",
    "modelo":"Audi",
    "velocidad":70,
    "patente":"AE 021 AB"
  },
  {
    "id":4,
    "fecha":"2018-12-29",
    "modelo":"Ford",
    "velocidad":130,
    "patente":"AEL 011 "
  },
  {
    "id":5,
    "fecha":"2019-02-12",
    "modelo":"Audi",
    "velocidad":160,
    "patente":"LPM 001"
  },
  {
    "id":6,
    "fecha":"2019-03-29",
    "modelo":"Chevrolet",
    "velocidad":60,
    "patente":"RE 041 AA"
  },
  {
    "id":7,
    "fecha":"2018-03-29",
    "modelo":"Ford",
    "velocidad":110,
    "patente":"LUC 111"
  },
  {
    "id":8,
    "fecha":"2019-07-29",
    "modelo":"Renault",
    "velocidad":90,
    "patente":"ALE 391"
  }

];

colorearFila(velocidad:number){
  if(velocidad>100){
  return 'text-danger';
}
}
}
