import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionsPageComponent } from './questions-page/questions-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CopyrightMarkComponent } from './copyright-mark/copyright-mark.component';
import { TreeQuestionsComponent } from './tree-questions/tree-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionsPageComponent,
    PageNotFoundComponent,
    HomePageComponent,
    CopyrightMarkComponent,
    TreeQuestionsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
