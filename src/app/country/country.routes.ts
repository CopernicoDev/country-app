import { Routes } from '@angular/router';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';


export const countryRoutes: Routes = [
    {
        path: 'by-capital',
        component: ByCapitalPage,
    },
    {
        path: 'by-region',
    },
    {
        path: 'by-country',
    }
];
