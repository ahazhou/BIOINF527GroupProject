import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionsPageComponent } from './questions-page/questions-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TreeQuestionsComponent } from './tree-questions/tree-questions.component';
import { ToolOverviewComponent } from './tool-overview/tool-overview.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'tool-overview', component: ToolOverviewComponent },
  { path: 'tree-questions', component: TreeQuestionsComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'questions-page', component: QuestionsPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
