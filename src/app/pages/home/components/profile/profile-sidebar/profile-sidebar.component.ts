import { User } from 'src/app/core/interfaces/User';
import { take } from 'rxjs';
import { getUser } from 'src/app/pages/auth-login/state/auth.selectors';
import { ModalState } from 'src/app/shared/states/modalState/modal.state';
import { AuthState } from 'src/app/pages/auth-login/state/auth.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { openModal } from 'src/app/shared/states/modalState/modal.actions';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent implements OnInit {

  user:User = {} as User;

  constructor(private store: Store< ModalState | AuthState> ) { }

  ngOnInit(): void {
    this.store.select(getUser).pipe( take(1) ) .subscribe( (auth) => { this.user = auth  });
  }

}
