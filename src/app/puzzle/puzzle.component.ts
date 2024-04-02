import { Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-puzzle',
  standalone: true,
  imports: [
    DragDropModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    CommonModule,
  ],
  templateUrl: './puzzle.component.html',
  styleUrl: './puzzle.component.css'
})
export class PuzzleComponent {
  list1: string[] = ['5','3','6','4'];
  list2: string[] = ['9','2','7','15'];
  list3: string[] = ['14','10','x','11'];
  list4: string[] = ['1','13','12','8'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      if (event.container.data[event.previousIndex]=='x' || event.container.data[event.currentIndex]=='x'){
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      }
    } else {
      if ((event.previousIndex==event.currentIndex) && (event.previousContainer.data[event.previousIndex]=='x' || event.container.data[event.currentIndex]=='x')){
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        transferArrayItem(event.container.data, event.previousContainer.data, event.currentIndex+1, event.previousIndex);
      }
    }
  }
}
