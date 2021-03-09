import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MonPremierComponent} from './mon-premier/mon-premier.component';
import {PostComponent} from './post/post.component';

import {PostService} from './services/post.service';
import {AuthComponent} from './auth/auth.component';
import {PostViewComponent} from './post-view/post-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import { SinglePostComponent } from './single-post/single-post.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuardService} from './services/auth.guard.service';
import { EditPostComponent } from './edit-post/edit-post.component';

const appRoutes: Routes = [
  {path: 'posts', canActivate: [AuthGuardService], component: PostViewComponent},
  {path: 'posts/:id', canActivate: [AuthGuardService], component: SinglePostComponent},
  {path: 'edit', canActivate: [AuthGuardService], component: EditPostComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', component: PostViewComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    PostComponent,
    AuthComponent,
    PostViewComponent,
    SinglePostComponent,
    FourOhFourComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
