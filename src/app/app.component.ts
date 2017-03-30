import { Component, OnInit} from '@angular/core';

import { Task } from './task/task';

@Component({
  selector: 'AP-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tasks: Task[];
  showTasks = true;

  ngOnInit() {
    this.tasks = new Array<Task>();
    this.tasks.push(new Task("Go shopping", "Make sure you buy milk"));
    this.tasks.push(new Task("Finish Animation", "Talk about triggers and states"));
  }

  toggleShowTasks(showTasks: boolean){
    this.showTasks = !showTasks;
  }
}
