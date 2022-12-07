import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
btnText = "Criar!"

constructor(
  private taskService: TaskService, 
  private messageService: MessageService,
  private router: Router) {}

async createHandler(Task: Task) {
 const formData = new FormData()

 formData.append("nome", Task.nome)
 formData.append("descricao", Task.descricao)


 await this.taskService.createTask(formData).subscribe();

 this.messageService.add("Tarefa adicionada!")

 this.router.navigate(['/'])
  }
}
