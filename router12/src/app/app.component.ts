import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';
import { IOutputData } from 'angular-split';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'router12';

  outlet1cuad1 = true;
  outlet1cuad2 = true;
  outlet1cuad3 = true;
  outlet1cuad4 = true;
  outlet1Split1 = true;
  outlet1Split2 = true;

  cuadrante2a = true;
  cuadrante2b = true;
  cuadrante3c = true;
  cuadrante3d = true;
  cuadranteDiv = true;

  outlet1ScrollArea1:number = 0;

  @ViewChild("area1") area1ref!:ElementRef;
  buttonContainer!: HTMLElement;
  
  constructor(
    private contexts: ChildrenOutletContexts,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.buttonContainer = this.area1ref.nativeElement.querySelector('.button-container');
  }

  ngOnInit(): void {

  }

  maximize(outlet:string, cuadrante: number) {
    switch (outlet) {
      case 'outlet1':
        switch (cuadrante) {
          case 1:
            this.outlet1cuad1 = true;
            this.outlet1cuad2 = false;
            this.outlet1cuad3 = false;
            this.outlet1cuad4 = false;
            this.outlet1Split1 = true;
            this.outlet1Split2 = false;
            break;
          case 2:
            this.outlet1cuad1 = false;
            this.outlet1cuad2 = true;
            this.outlet1cuad3 = false;
            this.outlet1cuad4 = false;
            this.outlet1Split1 = true;
            this.outlet1Split2 = false;
            break;
          case 3:
            this.outlet1cuad1 = false;
            this.outlet1cuad2 = false;
            this.outlet1cuad3 = true;
            this.outlet1cuad4 = false;
            this.outlet1Split1 = false;
            this.outlet1Split2 = true;
            break;
          case 4:
            this.outlet1cuad1 = false;
            this.outlet1cuad2 = false;
            this.outlet1cuad3 = false;
            this.outlet1cuad4 = true;
            this.outlet1Split1 = false;
            this.outlet1Split2 = true;
            break;
        }
        break;
    }
  }

  minimize(outlet:string) {
    switch (outlet) {
      case 'outlet1':
        this.outlet1cuad1 = true;
        this.outlet1cuad2 = true;
        this.outlet1cuad3 = true;
        this.outlet1cuad4 = true;
        this.outlet1Split1 = true;
        this.outlet1Split2 = true;
        this.renderer.setStyle(this.buttonContainer, "min-width", (this.area1ref.nativeElement.offsetWidth+this.outlet1ScrollArea1-10)+'px')
        break;
    }
  }



  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  onDetach($event: Event) {
    console.log("onDetach", $event);
    
  }
  onAttach($event: Event) {
    console.log("onAttach", $event);
    
  }
  onDeactivate($event: any) {
    console.log("onDeactivate", $event);
    
  }
  onActivate($event: any) {
    console.log("onActivate", $event);
    
  }
  //
  onDetachPopUp($event: Event) {
    console.log("onDetachPopUp", $event);
    
  }
  onAttachPopUp($event: Event) {
    console.log("onAttachPopUp", $event);
    
  }
  onDeactivatePopUp($event: any) {
    console.log("onDeactivatePopUp", $event);
    
  }
  onActivatePopUp($event: any) {
    console.log("onActivatePopUp", $event);
    
  }
  //
  onDetachDetails($event: Event) {
    console.log("onDetachDetails", $event);
    
  }
  onAttachDetails($event: Event) {
    console.log("onAttachDetails", $event);
    
  }
  onDeactivateDetails($event: any) {
    console.log("onDeactivateDetails", $event);
    
  }
  onActivateDetails($event: any) {
    console.log("onActivateDetails", $event);
  }

  doSomethingOnScroll = (e: any) => {
    // console.log(e);
    // console.log(container);
    if (e.target.scrollLeft) {
      console.log("scrollEnd");
      // console.log("scrollLeft",e.target.scrollLeft);
      this.outlet1ScrollArea1 = e.target.scrollLeft;
      console.log("outlet1ScrollArea1", this.outlet1ScrollArea1);
      
      // this.renderer.setStyle(this.buttonContainer, "min-width", (e.target.offsetWidth + e.target.scrollLeft -10)+'px')
      this.renderer.setStyle(this.buttonContainer, "min-width", (this.area1ref.nativeElement.offsetWidth+this.outlet1ScrollArea1-10)+'px')
    }
  }

  dragEnd = (e:any) => {
    console.log(e);
    console.log("dragEnd");
    console.log(this.area1ref.nativeElement.querySelector('.button-container'));
    console.log(this.area1ref.nativeElement.querySelector('.button-container').offsetWidth);
    console.log("area1Width",this.area1ref.nativeElement.offsetWidth);
    
    // this.renderer.setStyle(this.buttonContainer, "min-width", (this.area1ref.nativeElement.querySelector('.button-container').offsetWidth)+'px')
    // this.renderer.setStyle(this.buttonContainer, "min-width", (this.area1ref.nativeElement.querySelector('.button-container').offsetWidth+this.outlet1ScrollArea1)+'px')
    this.renderer.setStyle(this.buttonContainer, "min-width", (this.area1ref.nativeElement.offsetWidth+this.outlet1ScrollArea1-10)+'px')
  }

  transitionEnd = (e:any) => {
    console.log(e);
    console.log("transitionEnd");
    this.renderer.setStyle(this.buttonContainer, "min-width", (this.area1ref.nativeElement.offsetWidth+this.outlet1ScrollArea1-10)+'px')
  }

  areaVisible=()=>{

  }
}
