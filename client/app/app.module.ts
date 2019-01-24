import {
  PLATFORM_ID,
  NgModule,
  APP_ID,
  Inject
} from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserModule.withServerTransition({
      appId: 'my-app'
    }),
    AppRoutingModule,
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor (
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(this.platformId) ? 'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${this.appId}`);
  }
}
