import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
