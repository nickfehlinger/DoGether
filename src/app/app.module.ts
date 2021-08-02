import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'
import { TaskListComponent } from './task-list/task-list.component'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAnalyticsModule } from '@angular/fire/analytics'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { NewTaskComponent } from './task-list/new-task/new-task.component';
import { TaskCardComponent } from './task-list/task-card/task-card.component'
import { MatNativeDateModule } from '@angular/material/core'
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field'

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    NewTaskComponent,
    TaskCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
