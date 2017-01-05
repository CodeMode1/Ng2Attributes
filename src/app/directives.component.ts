import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dir-root',
  templateUrl: 'directives.component.html',
  styleUrls: ['directives.component.css']
})
export class DirectivesComponent {
  private switch = false;
  private items: number[] = [1,2,3,4,5];
  private value: number = 10;
  title = 'directives works!!';
  onSwitch(){
    this.switch = !this.switch;
  }
  
}



