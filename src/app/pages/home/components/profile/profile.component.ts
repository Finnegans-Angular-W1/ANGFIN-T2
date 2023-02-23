import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { ModalState } from 'src/app/shared/states/modalState/modal.state';
import { openModal } from 'src/app/shared/states/modalState/modal.actions';
import { User } from 'src/app/core/interfaces/User';
import { AuthState } from 'src/app/pages/auth-login/state/auth.state';
import { getUser } from 'src/app/pages/auth-login/state/auth.selectors';
import { authMe } from 'src/app/pages/auth-login/state/auth.actions';
import { take } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  modalInfo = { title:'Edición del Usuario', subtitle:'' }
  user: User = { } as User;

  constructor(private store: Store<ModalState | AuthState> ) { }

  ngOnInit(): void {
    this.store.select(getUser)
      .pipe(
        take(1)
        )
        .subscribe( (auth) => { this.user = auth 
      });
  }

  openModal(){
    this.store.dispatch(openModal());
  }
}
