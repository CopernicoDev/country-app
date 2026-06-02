import { Routes } from '@angular/router';
import { CountryLayout } from './layouts/CountryLayout/CountryLayout';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { ByCountryPage } from './pages/by-country-page/by-country-page';
import { ByRegionPage } from './pages/by-region-page/by-region-page';
import { ByCountryComponent } from './pages/by-country-component/by-country-component';


export const countryRoutes: Routes = [
    {
        path: '',
        component: CountryLayout,
        children: [
            {
                path: 'by-capital',
                component: ByCapitalPage,
            },
            {
                path: 'by-country-page',
                component: ByCountryPage,
            },
            {
                path: 'by-region',
                component: ByRegionPage,
            },
            {
                path: 'by/:id',
                component: ByCountryComponent
            },
            {
                path: '**',
                redirectTo: 'by-capital',
            }
        ]
    },
    /*{
        path: 'by-region',
    },
    {
        path: 'by-country',
    }*/
];

export default countryRoutes;
