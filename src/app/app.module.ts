import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { StompService, StompConfig } from '@stomp/ng2-stompjs';
import { StoreModule } from './store/store.module';

import { CardsContainerComponent } from './components/cards-container/cards-container.component';
import { CardComponent } from './components/card/card.component';

const stompConfig: StompConfig = {
  url: environment.websocketConnectUrl,
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
    HttpClientModule,
    StoreModule,
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
