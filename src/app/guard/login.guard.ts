import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = async (route, state) => {
  const auth = inject(AuthService)
  const router = inject(Router);

  console.log('desde interceptor', auth.isLogged())
  if(auth.isLogged()){
    console.log('desde interceptor 2', auth.isLogged())
    await router.navigate(['/admin']);
  }

  return true;
};
