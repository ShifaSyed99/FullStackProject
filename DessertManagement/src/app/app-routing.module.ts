import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuCreateComponent } from './menu-create/menu-create.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuUpdateComponent } from './menu-update/menu-update.component';
const routes: Routes = [
{ path: 'menu', component: MenuListComponent },
{ path: '', redirectTo: 'menu', pathMatch: 'full' },

{ path: 'create-menu', component: MenuCreateComponent },
{ path: 'update-menu/:id', component: MenuUpdateComponent },
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
