import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserModel } from '../models/user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: UserModel;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath () {
    return 'assets/users/' + this.user.avatar;
  }

  public onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
