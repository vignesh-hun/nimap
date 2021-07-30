import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent}  from './welcome/welcome.component'
import { ProductComponent}  from './product/product.component'
import { ProductListComponent}  from './product-list/product-list.component'
const routes: Routes = [
  { 
    path: 'welcome',                                   
    component:WelcomeComponent
  },
  { 
    path: 'product',
    component:ProductComponent
  },
  { 
    path: 'product-list',
    component:ProductListComponent
  },{
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
