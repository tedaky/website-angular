import {
  PLATFORM_ID,
  NgModule,
  APP_ID,
  Inject
} from '@angular/core';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {
  isPlatformBrowser,
  CommonModule
} from '@angular/common';

import { environment } from '../../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';

const declarations = [ AppComponent ];

export function imports(env: boolean) {
  return (env) ? [ ] : [ MainModule ];
}

@NgModule({
  declarations: declarations,
  imports: [
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserModule.withServerTransition({
      appId: 'my-app'
    }),
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TransferHttpCacheModule,
    imports(environment.production)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    this.log();
  }

  /**
   * Console log the platform and appId
   */
  private log(): void {
    const platform = isPlatformBrowser(this.platformId) ? 'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${this.appId}`);
  }
}
