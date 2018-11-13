import { Component, Input } from '@angular/core';
import { Participant } from '../../store/models/participant';

@Component({
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: [ 'card.component.scss']
})
export class CardComponent {

    @Input() participant: Participant;
}
