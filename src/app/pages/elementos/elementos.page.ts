import { Component, OnInit } from '@angular/core';

interface Hoja{

  imagen: string;
  nombre:string;
  descripcion:string;
  parrafo:string;
}

interface Blibliografia{
  nombre:string;
  link:string;
}

@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.page.html',
  styleUrls: ['./elementos.page.scss'],
})
export class ElementosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hojas: Hoja[] = [

    {
      imagen: "/assets/recursos/debate.png",
      nombre: "Debatir",
      descripcion: "descripcion imagen1",
      parrafo:'La app esta diseñada para que los alumnos tengan una herramienta en la cual puedan tener debates sobre un tema seleccionado'+
      ' y así aumentar su capacidad de investigación, autoaprendizaje y argumentación. '
    },
    {
      imagen: "/assets/recursos/mano.png",
      nombre: "Votar",
      descripcion: "descripcion imagen1",
      parrafo:'Los otros alumnos participantes prodrán votar por el mejor argumento según sus criterios.'
    },
    {
      imagen: "/assets/recursos/winner.png",
      nombre: "Ganar",
      descripcion: "descripcion imagen1",
      parrafo:'Según los votos obtenidos se puede llegar a la resolución y al ganador del debate, que en este caso serán todos los participantes por compartir la pasión por el debate :)'
    }

  ]


  links: Blibliografia[] = [

    {
      nombre: "Beneficios de Debatir",
      link: "https://observatorio.tec.mx/edu-bits-blog/2017/4/3/debatir-para-aprender",
      
    },
    {
      nombre: "Slider en ionic",
      link: "https://ionicframework.com/docs/api/slides",
      
    },
    {
      nombre: "Footer en ionic",
      link: "https://ionicframework.com/docs/api/footer",
      
    },
    {
      nombre: "Grid en ionic",
      link: "https://ionicframework.com/docs/api/grid",
      
    }
  ]
    



}
