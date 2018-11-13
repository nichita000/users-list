import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { WEBSOCKET_CONNECT_URL } from '../assets/config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StompService, StompConfig } from '@stomp/ng2-stompjs';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from './store/store.module';

import {
  CardsContainerComponent,
  CardComponent,
} from './components';

const stompConfig: StompConfig = {
  url: WEBSOCKET_CONNECT_URL,
  headers: {},
  heartbeat_in: 0,
  heartbeat_out: 0,
  reconnect_delay: 5000,
  debug: false
};

@NgModule({
  declarations: [
    AppComponent,
    CardsContainerComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule,
    StoreDevtoolsModule.instrument({ maxAge: 21 }),
    FlexLayoutModule,

    MatIconModule,
    MatCardModule,
  ],
  providers: [
    StompService,
    {
      provide: StompConfig,
      useValue: stompConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
