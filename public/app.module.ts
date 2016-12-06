import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';


import {AppComponent} from './app.component';
import {GalleryComponent} from './gallery.componet';
import {MainComponent} from "./main.component";
import {HistoryComponent} from "./history.component";
import {ContactComponent} from "./contact.component";
import {ContactService} from "./contact.service";

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule,
    RouterModule.forRoot([
        {path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: MainComponent },
        { path: 'gallery', component: GalleryComponent },
        { path: 'history', component: HistoryComponent },
        { path: 'contact', component: ContactComponent },
    ])],
    declarations: [AppComponent, GalleryComponent, MainComponent, HistoryComponent, ContactComponent],
    providers: [ContactService],
    bootstrap: [AppComponent],
})

export class AppModule{}