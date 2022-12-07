import { Component, Input, OnInit } from '@angular/core';

import {TaskService } from 'src/app/services/task.service';

import { Task } from 'src/app/Task';

import { environment } from 'src/enviroments/enviroment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';


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

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((items) => {
      const data = items.data

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });

      this.allTasks = data;
      this.tasks = data;
    });
  }


}

