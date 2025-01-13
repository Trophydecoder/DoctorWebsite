import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    BrowserModule,
    FormsModule // Add FormsModule here
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
