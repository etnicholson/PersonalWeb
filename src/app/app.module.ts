import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material-module';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
   declarations: [
      AppComponent,
      MainContentComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      AngularFullpageModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
