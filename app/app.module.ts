import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Ng2DiffModule} from 'angular2-diff-match-patch/ng2-diff.module';

import {AppComponent}  from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        Ng2DiffModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}