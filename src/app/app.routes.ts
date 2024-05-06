import { Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ProductoComponent } from './producto/producto.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { FacturaComponent } from './factura/factura.component';
import { EmpleadoComponent } from './empleado/empleado.component';

export const routes: Routes = [
    {
        path : 'cliente',
        component: ClienteComponent
    },
    {
        path:'proveedor',
        component:ProveedorComponent
    },
    {
        path:'producto',
        component:ProductoComponent
    },
    {
        path:'factura',
        component:FacturaComponent
    },
    {
        path:'empleado',
        component:EmpleadoComponent
    }

];
