
import { AppComponent } from './../../app.component';
import firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
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
    priority: new FormControl,
    every: new FormControl(''),
    interval: new FormControl(''),
    day: new FormControl(''),
    beginning: new FormControl()
  });
  public repeats: boolean = false
  public hidden: boolean = true
  public user: firebase.User | null = firebase.auth().currentUser
  

  constructor(private store: AngularFirestore, private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  public reset(){
    this.task.reset()
  }

  public show(){
    this.hidden = !this.hidden
    this.reset()
  }

  public newTask() {
    const newTask = new Task
    newTask.title = this.task.value.title
    newTask.priority = this.task.value.priority
    newTask.nextOccurrence = this.task.value.beginning ? new Date(this.task.value.beginning) : new Date()
    newTask.repeater.doesRepeat = this.repeats
    newTask.repeater.day = this.task.value.day ? Number(this.task.value.day) : 0
    newTask.repeater.every = this.task.value.every ? Number(this.task.value.every) : 0
    newTask.repeater.interval = this.task.value.interval ? Number(this.task.value.interval) : 0
    newTask.repeater = Object.assign({}, newTask.repeater)
    return this.store.collection('users').doc(this.user?.uid).collection('tasks').add(Object.assign({}, newTask)).then(() => {
      this.hidden = true
      this.reset()
    })
  }
}
