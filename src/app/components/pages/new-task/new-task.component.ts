import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
btnText = "Criar!"

constructor(private taskService: TaskService) {}

async createHandler(Task: Task) {
 const formData = new FormData()

 formData.append("nome", Task.nome)
 formData.append("descricao", Task.descricao)


 await this.taskService.createTask(formData).subscribe();

 //exibir msg

 //redirect
  }
}
