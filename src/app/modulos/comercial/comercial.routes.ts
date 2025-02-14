import { Routes } from '@angular/router';

export const ComercialRoutes: Routes = [
  {
    path: 'comercial',
    children: [
      {
        path: 'Asistencia',
        children: [
          {
            path: 'tareo-staff',
            loadComponent: () => import('./Asistencia/tareo-staff/tareo-staff.component').then(c => c.TareoStaffComponent)
          }
        ]
      }
    ]
  }
];
