import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  { path: 'gioithieu', component: GioithieuComponent },
  { path: 'sanpham', component: SanphamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
