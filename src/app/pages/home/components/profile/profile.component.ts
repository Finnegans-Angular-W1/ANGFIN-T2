import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { ModalState } from 'src/app/shared/states/modalState/modal.state';
import { openModal } from 'src/app/shared/states/modalState/modal.actions';
import { User } from 'src/app/core/interfaces/User';
import { AuthState } from 'src/app/pages/auth-login/state/auth.state';
import { getUser } from 'src/app/pages/auth-login/state/auth.selectors';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  modalInfo = { title:'Edición del Usuario', subtitle:'' }
  user: User = { } as User;

  private subUserr!: Subscription;

  constructor(private store: Store<ModalState | AuthState> ) { }

  ngOnInit(): void {
    this.subUserr = this.store.select(getUser).subscribe( (auth) => { this.user = auth });
  }

  ngOnDestroy(): void {
    this.subUserr.unsubscribe();
  }

  openModal(){
    this.store.dispatch(openModal());
  }
}
