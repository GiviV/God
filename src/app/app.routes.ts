import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { GodsComponent } from './gods/gods.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [


    {
        path: '',
        component: MainComponent,
        title: 'Home',

    },
    {
        path: 'gods',
        component: GodsComponent,
        title: 'Gods'
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact us'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About us'
    }

];
