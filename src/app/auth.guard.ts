
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.getAuthStatus()) {
    return true; // usuário logado, pode acessar
  } else {
    router.navigate(['/']); // não logado, volta para login
    return false;
  }
};