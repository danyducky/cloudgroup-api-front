import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CategoryComponent} from './category/category.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatCardModule} from '@angular/material/card'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {CategoryDialogComponent} from './category-dialog/category-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {BaseHttpClientInterceptor} from 'providers/BaseHttpClientInterceptor';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false} },
    { provide: HTTP_INTERCEPTORS, useClass: BaseHttpClientInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
