import { Component } from '@angular/core';


//interface Pagina
interface Pagina {
  icon: string;
  name: string;
  redirecTo: string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  //Arreglo del tipo interfas Pagina

  paginas: Pagina[] = [
    {
      icon: 'medal-outline',
      name: 'Elementos',
      redirecTo: '/elementos'
    },

    {
      icon: 'newspaper-outline',
      name: 'Registro', //********icono en pagina de ionic
      redirecTo: '/formulario'
    },

    {
      icon: 'person-outline',
      name: 'Iniciar sesion', //********icono en pagina de ionic
      redirecTo: '*'
    }

    

  ];
  //Fin arreglo clase componentes
}
