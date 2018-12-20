import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  {
    path: "HomeModule",
    loadChildren: "./modules/home/home.module#HomeModule"
  },
  {
    path: "AuthModule",
    loadChildren: "./modules/auth/auth.module#AuthModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
