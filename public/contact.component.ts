import {Component} from '@angular/core';
import {ContactService} from "./contact.service";

@Component({
    templateUrl: './public/contact.component.html',
    styleUrls: ['./public/assets/css/bootstrap.css', './public/assets/css/font-awesome.min.css',
        './public/assets/css/style.css']
})

export class ContactComponent{

    constructor(private contactService: ContactService){}

    addContact(name: string, email: string, message: string){
        if (!name || !email || !message) { return; }
        this.contactService.addContact(name, email, message);
    }

}