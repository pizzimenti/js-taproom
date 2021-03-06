import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { EditKegComponent } from './edit-keg.component';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'keg-list',
  inputs:['kegList'],
  directives:[KegComponent, EditKegComponent, NewKegComponent],

  template: `
    <div *ngFor="#currentKeg of kegList">
      <h3 (click)="kegWasSelected(currentKeg)">
        {{ currentKeg.brewName }}
      </h3>
      <keg-details *ngIf="currentKeg === selectedKeg" [keg]="currentKeg"></keg-details>
    </div>
    <edit-keg *ngIf='selectedKeg' [kegToEdit]='selectedKeg'></edit-keg>
    <new-keg></new-keg>

  `
})

export class KegListComponent {
  public kegList: Array<Keg>; // Array<Keg> is same as Keg[] type
  public selectedKeg: Keg;

  constructor() {


  }
  kegWasSelected(clickedKeg: Keg): void {
    if(this.selectedKeg === clickedKeg) {
      this.selectedKeg = undefined;
    } else {
      this.selectedKeg = clickedKeg;
    }
    console.log(this.selectedKeg);
  }
}
