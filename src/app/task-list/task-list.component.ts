import { Component, OnInit, ViewChild } from '@angular/core'
import { Observable } from 'rxjs'
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore'
import { Task } from '../models/task'
import { NewTaskComponent } from './new-task/new-task.component'

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
  }

  public createTask(){
    this.buildTask.show()
  }


}
