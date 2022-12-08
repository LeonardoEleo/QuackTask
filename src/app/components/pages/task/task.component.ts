import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  task?: Task;

   constructor(private taskService: TaskService , private route: ActivatedRoute) { }

   ngOnInit():  void{
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.taskService.getTask(id)
    .subscribe((item) => (this.task = this.item.data));
   }
}
