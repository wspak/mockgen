import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {PAGES_ROUTES} from './pages.routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(PAGES_ROUTES)
    ],
    exports: [RouterModule],
    declarations: [
        HomeComponent
    ]
})
export class PagesModule {
}
