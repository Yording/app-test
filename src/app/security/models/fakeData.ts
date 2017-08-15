import { Permission } from './permission.model';
import { Action } from './action.model';
import { User } from './user.model';
import { Role } from './role.model';
import { Resource } from './resource.model';

export const PERMISSIONS: Permission[] = [
    {
        id: 1,
        recurso: 'Módulo Ventas',
        usuario: 'Yording',
        role: 'Admin'
    },
    {
        id: 2,
        recurso: 'Módulo Compras',
        usuario: 'Yording',
        role: 'Editor'
    },
    {
        id: 3,
        recurso: 'Módulo Facturación',
        usuario: 'Cesar',
        role: 'Admin'
    },
    {
        id: 4,
        recurso: 'Vista dashboard',
        usuario: 'Angela',
        role: 'Restringuido'
    }
];
export const ACTIONS: Action[] = [
    {
        id: 1,
        action: 'Editar',
    },
    {
        id: 2,
        action: 'Crear',
    },
    {
        id: 3,
        action: 'Eliminar',
    },
    {
        id: 4,
        action: 'Consultar',
    }
];
export const ROLES: Role[] = [
    {
        id: 1,
        role: 'Admin',
    },
    {
        id: 2,
        role: 'Editor',
    },
    {
        id: 3,
        role: 'Creador',
    },
    {
        id: 4,
        role: 'Restringuido',
    }
];
export const RESOURCES: Resource[] = [
    {
        id: 1,
        name: 'Módulo Ventas',
        parent: '0',
        hereditary: false
    },
    {
        id: 2,
        name: 'Módulo Compras',
        parent: '0',
        hereditary: true
    },
    {
        id: 3,
        name: 'Módulo Facturación',
        parent: '2',
        hereditary: false
    },
    {
        id: 4,
        name: 'Vista dashboard',
        parent: '1',
        hereditary: true
    }
];
export const USERS: User[] = [
    {
        id: 1,
        name: 'Yording',
        phone: '3423432',
        email: 'yording@gmail.com'
    },
    {
        id: 1,
        name: 'Pedro',
        phone: '3482934',
        email: 'pedro@gmail.com'
    },
    {
        id: 1,
        name: 'Angela',
        phone: '74832478233',
        email: 'angela@gmail.com'
    },
    {
        id: 1,
        name: 'Carlos',
        phone: '342342',
        email: 'carlos@gmail.com'
    }
];