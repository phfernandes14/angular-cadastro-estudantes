import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { EstudantesDetailComponent } from './estudantes-detail/estudantes-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudantesComponent,
    EstudantesDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
