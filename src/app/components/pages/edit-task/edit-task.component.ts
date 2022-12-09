import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'src/app/services/message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {
  task!: Task
  btnText: string = 'Editar';


constructor(
  private taskService: TaskService, 
  private route: ActivatedRoute, 
  private messageService: MessageService, 
  private router: Router) {}

ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get("id"))

  this.taskService.getTask(id).subscribe(item => {
    this.task = item.data;

  
  });
}

async editHandler(taskData: Task) {
  
  const id = this.task.id;

 
  await this.taskService.updateTask(id!, taskData).subscribe(() => {
    this.messageService.add("Tarefa atualizada!");

    this.router.navigate(['/']);
  });

}
}
