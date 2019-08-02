import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  visible: boolean;
  constructor() { this.visible = true}

  setVisible(){
    this.visible = true;
  }

  setInvisible(){
    this.visible = false;
  }
}
