import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { MainComponent } from './components/main/main.component';
import { VideoLayoutComponent } from './components/main/video-layout/video-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    VideoLayoutComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    VgCoreModule
  ],
  bootstrap: [ 
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
