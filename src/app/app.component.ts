import { Component, Input } from '@angular/core';
import {  OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

import { Course, Query } from './types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '安恒';
   username='';
   password='';
   courses: Observable<Course[]>;
   constructor(private apollo: Apollo) { }
   ngOnInit() {
     this.courses = this.apollo.watchQuery<Query>({
       query: gql`
       query users{
         users{
           id
           username
           email
           password
         }
       }
       `
     })
       .valueChanges
       .pipe(
         map(result => result.data.users)
       );
   }
  onVoted(userinput: string) {
    this.username=userinput['firstName'];
    this.password=userinput['lastName'];
    // console.log(this.username,this.password);

  }
}
