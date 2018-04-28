import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PAGES_ROUTES } from './pages.routes';
import { MaterialModule } from '../material/material.module';
import { MiscModule } from '../misc/misc.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forRoot(PAGES_ROUTES),
        MiscModule
    ],
    exports: [RouterModule],
    declarations: [
        HomeComponent
    ]
})
export class PagesModule {
}
