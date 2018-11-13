import { Participant } from './participant';

export interface ParticipantSocket {
    messageType: string;
    participant?: Participant;
    participantId?: string;
    newReadyStatus?: boolean;
}
