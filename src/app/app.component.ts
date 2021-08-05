import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(public auth: AngularFireAuth){}
  public title = 'DoGether';
  public user!: firebase.User | null
  public newUser!: boolean | undefined
  public signUp: boolean = false
  public signIn: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl('')
  })

  private email = this.signIn.value.email
  private password = this.signIn.value.password
  private confirmPassword = this.signIn.value.confirmPassword

  public passwordConfirmed: boolean = this.password === this.confirmPassword

  

  facebookLogin() {
    this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res => {
      this.user = res.user
      this.newUser = res.additionalUserInfo?.isNewUser
    }).then(() => {
      this.auth.user.forEach(r => {
        console.log(r)
      })
    })
  }

  emailLogin() {
    this.auth.signInWithEmailAndPassword(this.email, this.password).then(res => {
      this.user = res.user
      console.log(res)
    })
  }

  emailSignUp() {
    this.auth.createUserWithEmailAndPassword(this.email, this.password).then(res => {
      this.user = res.user
    })
  }

}
