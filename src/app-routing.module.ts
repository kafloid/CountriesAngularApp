import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { PorPaisComponent } from './app/pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './app/pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './app/pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './app/pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [

    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    }
];

@NgModule({
    imports: [

    ],
    exports: [

    ]
})
export class AppRoutingModule {

}