import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormWrapperComponent } from './components/form/form-wrapper/form-wrapper.component';
import { FormButtonComponent } from './components/form/form-button/form-button.component';
import { FormInputComponent } from './components/form/form-input/form-input.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    FormWrapperComponent,
    FormButtonComponent,
    FormInputComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
