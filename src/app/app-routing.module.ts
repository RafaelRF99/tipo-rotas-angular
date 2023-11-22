import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { EstudoComponent } from './views/estudo/estudo.component';
import { ProjetoComponent } from './views/projeto/projeto.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'estudo',
    component: EstudoComponent,
  },
  {
    path: 'projeto/:id',
    component: ProjetoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
