import { Component, Input, OnInit } from '@angular/core';
import { tagcolors, Task } from '../../tododata';

const sampleTask : Task = {
  name: "Sample",
  complete: false,
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task = sampleTask;
  constructor() { }

  ngOnInit(): void {
  }

  get tagcolor() {
    if (this.task.hasOwnProperty('tag')) {
      const filteredTags = tagcolors.filter(_ => _.name === this.task.tag).map(_ => _.color);
      if (filteredTags) {
        return filteredTags[0];
      } else {
        console.error("No such filter");
        return "";
      }
    }
    return "";
  }
}
