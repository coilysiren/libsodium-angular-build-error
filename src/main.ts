import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import * as _uninitalizedSodiumDoNotUse from "libsodium-wrappers";

export async function readySodium(): Promise<void> {
  await _uninitalizedSodiumDoNotUse.ready;
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

