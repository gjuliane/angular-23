import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';

const routes: Routes = [
  {
    path: 'pruebas/uno',
    component: UnoComponent,
  },
  {
    path: 'pruebas/uno',
    component: UnoComponent,
    outlet: 'popup'
  },
  {
    path: 'pruebas/uno',
    component: UnoComponent,
    outlet: 'detalles'
  }
  
  // {
  //   path:'pruebas',
  //   children: [
  //     {
  //       path: 'uno',
  //       component: UnoComponent
  //     },
  //     {
  //       path: 'dos',
  //       component: DosComponent
  //     }
  //   ]
  // },
  // {
  //   path:'pruebas',
  //   outlet: 'popup',
  //   children: [
  //     {
  //       path: 'uno',
  //       component: UnoComponent
  //     },
  //     {
  //       path: 'dos',
  //       component: DosComponent
  //     }
  //   ]
  // },
  // {
  //   path:'pruebas',
  //   outlet: 'detalles',
  //   children: [
  //     {
  //       path: 'uno',
  //       component: UnoComponent
  //     },
  //     {
  //       path: 'dos',
  //       component: DosComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebasRoutingModule { }
