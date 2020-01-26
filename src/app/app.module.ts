import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { RecordsService } from './records.service';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [
    AppComponent,
    DialogExampleComponent
  ],
  entryComponents: [DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
