import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable()
export class Toast {
    constructor( private messageService: MessageService ) { }

    public showToastMessage(severity: string, summary: string, detail: string): void {
        this.messageService.add({severity: severity, summary: summary, detail: detail});
    }
}
