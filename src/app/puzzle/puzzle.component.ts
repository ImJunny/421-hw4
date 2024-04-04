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
  styleUrl: './puzzle.component.css',
})
export class PuzzleComponent {
  tiles: number[] = [4, 11, 8, 15, 14, 5, 3, 10, 1, 13, 0, 9, 7, 12, 2, 6];

  drop(event: CdkDragDrop<number>) {
    let draggedIndex = event.previousContainer.data;
    let destinationIndex = event.container.data;

    let dragged = this.tiles[event.previousContainer.data];
    let destination = this.tiles[event.container.data];

    if (destination == 0 && this.isAdjacent(draggedIndex, destinationIndex)) {
      this.tiles[destinationIndex] = dragged;
      this.tiles[draggedIndex] = 0;
    }
  }

  isAdjacent(draggedIndex: any, destinationIndex: any): boolean {
    return (
      this.tiles[draggedIndex] == this.tiles[destinationIndex + 1] ||
      this.tiles[draggedIndex] == this.tiles[destinationIndex - 1] ||
      this.tiles[draggedIndex] == this.tiles[destinationIndex + 4] ||
      this.tiles[draggedIndex] == this.tiles[destinationIndex - 4]
    );
  }
}
