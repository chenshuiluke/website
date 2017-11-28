import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import {constants} from "./app.provider";
import { ParallaxImageComponent } from './parallax-image/parallax-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ProjectsComponent,
    ProjectComponent,
    ParallaxImageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'lukecs.com'}),
    AppRoutingModule
  ],
  providers: [constants],
  bootstrap: [AppComponent]
})
export class AppModule { }
