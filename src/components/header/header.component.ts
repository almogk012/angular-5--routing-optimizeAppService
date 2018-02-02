import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  plus:number = 0;
  constructor() { }

  ngOnInit() {
  }
  plusFunc(){
    this.plus++;
  }
}
