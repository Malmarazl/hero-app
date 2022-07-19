import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'heroes', 
    loadChildren: () => import(`./components/heroes/heroes.module`).then(
      module => module.HeroesModule
    )
  },
  { 
    path: 'detail/:id', 
    loadChildren: () => import(`./components/hero-detail/hero-detail.module`).then(
      module => module.HeroDetailModule
    )
  },
  { 
    path: 'edit/:id', 
    loadChildren: () => import(`./components/edit-hero/edit-hero.module`).then(
      module => module.EditHeroModule
    )
  },  
  { path: '**', redirectTo: 'heroes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
