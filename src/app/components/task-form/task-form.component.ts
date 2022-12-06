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

  taskForm!: FormGroup;

  ngOnInit(): void {
    this.taskForm =new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      dataConclusao: new FormControl(''),
      status: new FormControl('')
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
    console.log("enviou form")
    this.onSubmit.emit(this.taskForm.value)
  }

}
