import { Routes } from '@angular/router';
import { FormComponent } from './form-component/form';
import { BoasVindasComponent } from './boas-vindas-component/boas.vindas';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'boas-vindas', component: BoasVindasComponent, canActivate: [authGuard] }
];