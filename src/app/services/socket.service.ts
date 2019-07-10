import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Document } from '../models/socket';
import { environment } from '../../environments/environment';

import * as socketIo from 'socket.io-client';

const SERVER_URL = environment.Api_url;
@Injectable({
    providedIn: 'root'
})
export class SocketService {
 
    constructor(private socket: Socket) { }
    public initSocket(): void {
        this.socket = socketIo(SERVER_URL);
    }
    getDocument(id: string) {
        this.socket.emit('getDoc', id);
    }

    newDocument() {
        this.socket.emit('event', { id: this.docId(), doc: '' });
    }

    editDocument(document: Document) {
        this.socket.emit('editDoc', document);
    }
 
    private docId() {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }
}