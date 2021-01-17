import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from "@angular/fire/firestore";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
