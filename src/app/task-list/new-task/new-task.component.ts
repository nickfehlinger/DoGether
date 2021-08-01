import { AngularFirestore } from '@angular/fire/firestore';
import { Task } from '../../models/task';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.sass']
})
export class NewTaskComponent implements OnInit {
  
  task: FormGroup = new FormGroup({
    title: new FormControl('')
  });
  hidden: boolean = true

  constructor(private store: AngularFirestore) { }

  ngOnInit(): void {
  }

  public reset(){
    this.task.reset()
  }

  public show(){
    this.hidden = false
    this.reset()
  }

  public newTask(){
    const newTask = new Task
    newTask.title = this.task.value.title
    return this.store.collection('tasks').add(Object.assign({}, newTask)).then(() => {
      this.hidden = true
      this.reset()
    })
  }
}
