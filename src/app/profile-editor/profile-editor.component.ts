import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Output,EventEmitter} from "@angular/core";
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  @Output() voted = new EventEmitter<object>();
  onSubmit() {
    this.voted.emit(this.profileForm.value);
    // console.log(this.profileForm.value);
  }
}