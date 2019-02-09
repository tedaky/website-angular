import {
  PLATFORM_ID,
  NgModule,
  APP_ID,
  Inject
} from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  isPlatformBrowser,
  CommonModule
} from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { MainModule } from '../main/main.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PromptUpdateComponent } from '../prompt-update/prompt-update.component';

import { CheckForUpdateService } from '../check-for-update/check-for-update.service';
import { PromptUpdateService } from '../prompt-update/prompt-update.service';
import { LogUpdateService } from '../log-update/log-update.service';

import { environment } from '../../../environments/environment';

const declarations = [
  AppComponent,
  PromptUpdateComponent
];

/**
 * Lazily import `Modules` based on `production`
 *
 * Fixes compile issues with `server` and `browser`
 *
 * @param env Indicate if `production` is in use
 */
export function lazyImports(env: boolean) {
  return (env) ? [ ] : [ MainModule ];
}
/**
 * `Browser` imports
 *
 * Fixes compile issues with `server` and `browser`
 *
 * @param env Indicate if `browser` is in use
 */
export function browserImports(env: boolean) {
  return (env) ? [ ] : [ BrowserAnimationsModule ];
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
    lazyImports(environment.production),
    browserImports((isPlatformBrowser(PLATFORM_ID) ? true : false))
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    CheckForUpdateService,
    PromptUpdateService,
    LogUpdateService
  ]
})
export class AppModule {
  public constructor(
    /**
     * `PLATFORM_ID` token
     */
    @Inject(PLATFORM_ID) private platformId: Object,
    /**
     * `APP_ID` token
     */
    @Inject(APP_ID) private appId: string
  ) {
    this.log();
  }

  /**
   * `console.log` the platform and appId
   */
  private log(): void {
    /**
     * Set the string of the `platform` being used
     */
    const platform = isPlatformBrowser(this.platformId) ? 'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${this.appId}`);
  }
}
