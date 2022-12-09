import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  @Output() onSubmit = new EventEmitter<Task>()
  @Input() btnText!: string
  @Input() taskData: Task | null = null

  taskForm!: FormGroup;


  ngOnInit(): void {
    this.taskForm = new FormGroup({
      id: new FormControl(this.taskData ? this.taskData.id : ''),
      nome: new FormControl(this.taskData ? this.taskData.nome : '', [Validators.required]),
      descricao: new FormControl(this.taskData ? this.taskData.descricao : '', [Validators.required])
    });
  }

  get nome() {
    return this.taskForm.get('nome')!;
  }

  get descricao() {
    return this.taskForm.get('descricao')!;
  }

  submit() {
    if (this.taskForm.invalid) {
      return;
    }
    
    this.onSubmit.emit(this.taskForm.value)
  }

}
