import { Component, Input, trigger, state, style, HostListener, transition, animate } from '@angular/core';

import { Task } from './task';

@Component({
  selector: 'ap-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  animations: [
    trigger('taskStatus', [
      state('highlighted', style({
        background: '#33a',
        color: 'white',
        transform: 'rotate(-5deg)',
        border: '3px solid #006'
      })),
      state("unhighlighted", style({
        background: "#127",
        color: "#888",
        transform: 'rotate(0deg)'
      })),
      state("activated", style({
        background: "#2b3",
        color: "white",
        border: '3px solid #060',
        transform: 'rotate(-8deg)',
      })),
      transition(':enter', [style({ transform: 'scale(0.5)'}), animate('500ms')]),
      transition(':leave', animate('500ms', style({transform: 'scale(0.5)'}))),
      transition('unhighlighted <=> highlighted', animate('150ms')),
    ])
  ]
})
export class TaskComponent {
  @Input() task: Task;
  @Input() showTasks: boolean;
  taskStatus: string = 'unhighlighted';
  isChecked: boolean = false;

  toggleHighlighted(isHighlighted: boolean){
    if(!this.isChecked){
      this.taskStatus = isHighlighted ? 'highlighted' : 'unhighlighted';
    }
  }

  toggleActiveState() {
    this.isChecked = !this.isChecked;
    this.taskStatus = this.isChecked ? 'activated' : 'highlighted';
    }
}

