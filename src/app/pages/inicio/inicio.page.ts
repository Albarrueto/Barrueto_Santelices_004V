import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

//interface Pagina
interface LinkFooter {
  ref: string;
  ftr_img: string;
  
}



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //Arreglo del tipo interfas Pagina

  link_footers: LinkFooter[] = [
    {
      ref: 'https://www.facebook.com' ,
      ftr_img: '/assets/recursos/facebook.png'
      
    },

    {
      ref: 'https://www.twitter.com',
      ftr_img: '/assets/recursos/twitter.png', 
      
    },

    {
      ref: 'https://www.instagram.com',
      ftr_img: '/assets/recursos/instagram.png', 
      
    }

    

  ];
  //Fin arreglo clase componentes

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
