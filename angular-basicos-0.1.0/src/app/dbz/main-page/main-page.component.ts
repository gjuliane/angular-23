import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  mensaje: string | undefined;
  constructor() { }

  ngOnInit(): void {
    this.mensaje = "Sin Nombre...";
  }

  // Forma vieja
  // agregar( event: any){
  //   event.preventDefault();
  //   // console.log("Hey!");
  //   console.log(event);
  // }

  agregar( ){
    console.log("Esto es una prueba");
  }

  recibeMensaje = (mensaje: string) => {
    console.log("Mensaje recibido");
    this.mensaje = mensaje;
  }

}
