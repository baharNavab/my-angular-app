import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  @Input({ required: true }) user!: UserModel;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  ngOnInit(): void {
    console.log(this.user);
  }

  get imagePath () {
    return 'assets/users/' + this.user.avatar;
  }
  public onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
