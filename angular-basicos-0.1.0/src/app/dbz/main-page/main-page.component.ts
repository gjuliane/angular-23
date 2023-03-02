import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
