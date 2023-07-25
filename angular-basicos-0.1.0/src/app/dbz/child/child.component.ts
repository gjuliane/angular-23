import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() onEnviaMensaje = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClic = (mensaje: string) => {
    console.log("Click");
    this.onEnviaMensaje.emit(mensaje);
  }

}
