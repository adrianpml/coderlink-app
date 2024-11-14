import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { loginGuard } from './guard/login.guard';
import { RegistroComponent } from './registro/registro.component';
import { ContratarDesarrolladorComponent } from './contratar-desarrollador/contratar-desarrollador.component';
import { PerfilClienteComponent } from './perfil/perfil-cliente/perfil-cliente.component';
import { BusquedaDesarrolladorComponent } from './busqueda-desarrollador/busqueda-desarrollador.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    { path: 'login', 
        //canActivate: [loginGuard],
        component: LoginComponent},
    { path: 'admin', 
        loadComponent: ()=> import('./admin/admin.component').then(m=>m.AdminComponent)
    },
    { path: 'registro', 
        //canActivate: [loginGuard],
        component: RegistroComponent},
    { path: 'contratar', 
        //canActivate: [loginGuard],
        component: ContratarDesarrolladorComponent},
    { path: 'busqueda-desarrollador', 
        //canActivate: [loginGuard],
        component: BusquedaDesarrolladorComponent},
    { path: 'perfil-cliente', 
            //canActivate: [loginGuard],
            component: PerfilClienteComponent},
    { path: 'contacto', 
                //canActivate: [loginGuard],
                component: ContactoComponent},                           
];
