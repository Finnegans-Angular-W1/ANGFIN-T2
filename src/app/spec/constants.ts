import { SharedModule } from './../shared/shared.module';
import { FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Providers
import { provideMockStore } from '@ngrx/store/testing';
import { initialAppState } from './../core/state/app.state';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { of } from 'rxjs';

const testingModules = [
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
]
// // const testingDeclarations = [];
const testingProviders = [
    provideMockStore({
        initialState: { initialAppState }
    }),
    { provide: ActivatedRoute, useValue: { params: of({ id: 123 }) } },//params para el activatedRoute (mock)
    { provide: HttpClient },
    { provide: FormBuilder },
]

export const TESTING_MODULES = [...testingModules];
export const TESTING_PROVIDERS = [...testingProviders];