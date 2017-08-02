import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { OnMount } from 'ng-dynamic';

@Component({
  selector: 'my-dynamic',
  template: `<ion-list><ion-item> {{text}} <button ion-button (click)="doSomething()" #innerContent><ng-content></ng-content></button></ion-item></ion-list>`
})
export class MyDynamicComponent implements OnMount, OnInit {
  @Input() msg: string;
  @ViewChild('innerContent') innerContent: ElementRef;

  text: string;

  constructor() {
    console.log('Hello MyDynamicComponent Component');
    this.text = 'Hello Dynamic Word!';
  }

  dynamicOnMount(attr: Map<string, string>, content: string) {
    this.msg = attr.get('msg');
    //this.innerContent.nativeElement.innerHTML = content;
    this.innerContent['_elementRef'].nativeElement.innerHTML = this.msg;
    console.log(`onMount: ${this.msg}`);
  }

  ngOnInit() {
    console.log(`onInit: ${this.msg}`);
  }

  doSomething() {
    console.log("CLICADO!");
  }

}
