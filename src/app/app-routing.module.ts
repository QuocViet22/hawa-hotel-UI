import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: AppLayoutComponent,
          children: [
            {
              path: 'uikit',
              loadChildren: () => import('./demo/components/uikit/uikit.module').then((m) => m.UIkitModule),
            },
          ],
        },
        { path: '**', redirectTo: '/notfound' },
      ],
      { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' },
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
