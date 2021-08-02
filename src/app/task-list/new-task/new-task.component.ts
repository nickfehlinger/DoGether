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
  
  public task: FormGroup = new FormGroup({
    title: new FormControl(''),
    every: new FormControl(''),
    interval: new FormControl(''),
    day: new FormControl(''),
    beginning: new FormControl(new Date().toString())
  });
  public repeats: boolean = false
  public today = new Date().toString()
  public hidden: boolean = true

  constructor(private store: AngularFirestore) { }

  ngOnInit(): void {
  }

  public reset(){
    this.task.reset()
  }

  public show(){
    this.hidden = !this.hidden
    this.reset()
    this.task.value.beginning = this.today
  }

  public newTask() {
    const newTask = new Task
    newTask.title = this.task.value.title
    newTask.nextOccurrence = this.task.value.beginning ? new Date(this.task.value.beginning) : new Date()
    newTask.repeater.doesRepeat = this.repeats
    newTask.repeater.day = this.task.value.day ? Number(this.task.value.day) : null
    newTask.repeater.every = this.task.value.every ? Number(this.task.value.every) : null
    newTask.repeater.interval = this.task.value.interval ? Number(this.task.value.interval) : null
    newTask.repeater = Object.assign({}, newTask.repeater)
    return this.store.collection('tasks').add(Object.assign({}, newTask)).then(() => {
      this.hidden = true
      this.reset()
    })
  }
}
