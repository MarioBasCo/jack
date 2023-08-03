import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UtilService } from '../services/util.service';

export const authGuardFn: CanActivateFn = () => {
  const utilSer = inject(UtilService);
  const router = inject(Router);

  const user = utilSer.get('user_jack');
  if (!user) {
    router.navigate(['/auth']);
    return false;
  }
  return true;
} 