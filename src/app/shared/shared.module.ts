import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { ErrorComponent } from './error.component';
import { AdminComponent } from './admin.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    ErrorComponent,
    AdminComponent,
    LoadingComponent
  ],
  exports: [LoadingComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
