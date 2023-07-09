import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'

}) 

export class MenuComponent {
  showMenu: boolean = true;

  toogleList(){
  this.showMenu = !this.showMenu;

   }

}