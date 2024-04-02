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
  selector: 'app-towers',
  standalone: true,
  imports: [
    DragDropModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    CommonModule,
  ],
  templateUrl: './towers.component.html',
  styleUrl: './towers.component.css',
})
export class TowersComponent {
  disks1: string[] = ['disk-1', 'disk-2', 'disk-3'];
  disks2: string[] = [];
  disks3: string[] = [];
  topDisks: string[] = [this.disks1[0], this.disks2[0], this.disks3[0]];

  drop(event: CdkDragDrop<string[]>) {
    let draggedItem = event.previousContainer.data[0];
    let newerArrayTop = event.container.data[0];
    if (draggedItem > newerArrayTop) return;

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.topDisks = [this.disks1[0], this.disks2[0], this.disks3[0]];
  }
}
