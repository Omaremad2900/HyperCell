import { Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { HomeComponent } from './home/home.component';
import { TdfComponent } from './tdf/tdf.component';
import { RdfComponent } from './rdf/rdf.component';

export const routes: Routes = [

    {
        path: 'Notes',
        component: NotesComponent,
        title: 'Notes'

    },
    {
        path: '',
        component:HomeComponent,
        title: 'Home'
    },
    {
        path:'FormTdf',
        component:TdfComponent,
        title:'FormT'
    },
    {
        path:'FormRdf',
        component:RdfComponent,
        title:'FormR'
    }
];
