import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@buypart/http';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { ThemeModule } from '@buypart/theme';
import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from '@buypart/material';
import { debug, disableLogging } from 'x-utils-es/esm';

// disable console.log
// if (environment.production === true) {
//   debug(`-- Using Angular 11.x --`);
//   debug(`-- CONSOLE LOGS DISABLES --`);
//   // tslint:disable-next-line: only-arrow-functions
//   console.log = function() {};
//   disableLogging();
// }

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    MaterialModule,
    AppRoutingModule,
    ThemeModule,
    HttpClientModule,
    HttpModule,
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
