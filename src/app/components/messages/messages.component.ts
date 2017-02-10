import { Component, Input } from '@angular/core';
import { Messages } from './messages';

@Component({
    selector: 'messages',
    templateUrl: './messages.template.html'
})
export class MessagesComponent {
    @Input()
    messageList: Messages;
}