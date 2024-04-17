import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuUpdateComponent } from './menu-update/menu-update.component';
import { MenuCreateComponent } from './menu-create/menu-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    MenuListComponent,
    MenuUpdateComponent,
    MenuCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
   // provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
