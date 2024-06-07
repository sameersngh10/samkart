import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryComponent } from './grocery/grocery.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { FashionComponent } from './fashion/fashion.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { ToysComponent } from './toys/toys.component';

const route: Routes = [
  { path: 'grocery', component: GroceryComponent },
  { path: 'fashion', component: FashionComponent },
  { path: 'mobiles', component: MobilesComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'twowheeler', component: CoursesComponent },
  { path: 'toys', component: ToysComponent },
]

@NgModule({
  declarations: [
    GroceryComponent,
    MobilesComponent,
    FashionComponent,
    ElectronicsComponent,
    CoursesComponent,
    ToysComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class ProductsModule { }
