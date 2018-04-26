import {Component, Inject, LOCALE_ID, OnInit, PLATFORM_ID} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(
        public router: Router,
        @Inject(LOCALE_ID) locale: string) {
            router.events.subscribe(e => {
                if (e instanceof NavigationStart) {
                    // setting the default meta data
                }
            });
    }
    ngOnInit(): void {
    }
}
