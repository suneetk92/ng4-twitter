import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {TwitterComponent} from './components/twitter/twitter.component';

import {PostsService} from './services/posts.service';
import {PostsComponent} from './components/posts/posts.component';
import { Twitter2Component } from './components/twitter2/twitter2.component';

const appRoutes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'twitter', component: TwitterComponent},
  {path: 'twitter2', component: Twitter2Component}
];

@NgModule({
  declarations: [
    AppComponent,
    TwitterComponent,
    PostsComponent,
    Twitter2Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
