import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
import { Router, ActivatedRoute} from '@angular/router';
import {faTimes, faEdit} from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'src/app/services/message.service';
import { Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  task?: Task;
  faTimes = faTimes;
  faEdit = faEdit;

   constructor(
    private taskService: TaskService,
    private route: ActivatedRoute, 
    private messageService: MessageService, 
    private router: Router ) { }

   ngOnInit():  void{
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.taskService.getTask(id).subscribe((item) => {
      this.task = item.data
      
      this.task.data_conclusao = new Date(this.task.data_conclusao!).toLocaleDateString(
        'pt-BR'
      );
    });
    

    console
   }
  
    removeHandler(id: number) {
    this.taskService.removeTask(id).subscribe((data) => {
      this.messageService.add("Tarefa Excluída com sucesso!");
    this.router.navigate(['/']);
    });

   }
}
