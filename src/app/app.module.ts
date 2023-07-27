import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { AppRoutingModule } from "./app-routing.module";
import { TypicodeService } from './services/typicode.service';
import { HttpClientModule } from "@angular/common/http";
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: 'apiUrl', useValue: 'https://reqres.in/api' }
  ]
})
export class AppModule {}
