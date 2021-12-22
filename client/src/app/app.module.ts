import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomepageComponent } from './components/homepage/homepage.component';

import { Toast } from './classes/toast'

//PrimeNG Modules
import { SharedModule } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { ImageModule } from 'primeng/image';

import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,

    SharedModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    ToastModule,
    ImageModule
  ],
  providers: [MessageService, Toast],
  bootstrap: [AppComponent]
})
export class AppModule { }
