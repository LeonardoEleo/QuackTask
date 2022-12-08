import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NewTaskComponent } from './components/pages/new-task/new-task.component';
import { TaskComponent } from './components/pages/task/task.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'task/new', component: NewTaskComponent},
  {path: 'task/:id', component: TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
