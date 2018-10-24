import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ErrandComponent } from './errand/errand.component';
import { ErrandDetailsComponent } from './errand-details/errand-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { ErrandFormComponent } from './errand-form/errand-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrandComponent,
    ErrandDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    ErrandFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
