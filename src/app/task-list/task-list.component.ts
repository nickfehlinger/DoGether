
import { Component, OnInit, ViewChild } from '@angular/core'
import { Observable } from 'rxjs'
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth'
import { Task } from '../models/task'
import { NewTaskComponent } from './new-task/new-task.component'
import { DateTime } from 'luxon'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {
  @ViewChild(NewTaskComponent)
  public buildTask!: NewTaskComponent
  
  
  public tasks: Observable<DocumentChangeAction<Task>[]>


  constructor(private store: AngularFirestore) { 
    this.tasks = store.collection<Task>('tasks').snapshotChanges()
    }

  ngOnInit(): void {
    // this.tasks.forEach(t => {
    //   t.forEach(u => {
    //     console.log(DateTime.fromJSDate(u.payload.doc.data().nextOccurrence) < DateTime.now())
    //     DateTime.fromJSDate(u.payload.doc.data().nextOccurrence) < DateTime.now() && u.payload.doc.data().completed === true
    //       ? this.store.collection('tasks').doc(u.payload.doc.id).update({ completed: false }).then((r) => console.log(r)) : null
    //   })
    // })
  }

  public createTask(){
    this.buildTask.show()
  }



}
