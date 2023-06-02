import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';
import { CustomReuseStrategy } from './CustomReuseStrategy';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full',
    data: {
      reuseComponent: true,
    },
  },
  {
    path: 'criarPensamento',
    component: CreateThoughtsComponent,
  },
  {
    path: 'listarPensamento',
    component: ListThoughtsComponent,
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: DeleteThoughtComponent,
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditThoughtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy }],
})
export class AppRoutingModule {}
