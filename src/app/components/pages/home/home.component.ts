import { Component, Input, OnInit } from '@angular/core';

import {TaskService } from 'src/app/services/task.service';

import { Task } from 'src/app/Task';

import { environment } from 'src/enviroments/enviroment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allTasks: Task[] = []
  tasks: Task[] = []
  baseApiUrl = environment.baseApiUrl

  searchTerm: string = '';
  faSearch = faSearch;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    
    this.taskService.getTasks().subscribe((items) => {
      const data = items.data

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
        item.data_conclusao = new Date(item.data_conclusao!).toLocaleDateString(
          'pt-BR'
        );
      });

      this.allTasks = data;
      this.tasks = data;
    });
  }


  checkTask(task: Task) {
    if (task.status == 0) {
      this.taskService.check(task.id!).subscribe(() => {
        this.ngOnInit();
      });
    }
    else {
       this.taskService.uncheck(task.id!).subscribe((data) => {

      this.ngOnInit();
    });
    
  }
  

 
}
  

}




