import { NgModule } from '@angular/core';
import { StoreModule as NgRxStoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';
import { ParticipantsEffects } from './effects/particpants';

@NgModule({
    imports: [
        NgRxStoreModule.forRoot(reducers),
        EffectsModule.forRoot([ParticipantsEffects])
    ],
    exports: []
})
export class StoreModule {}
