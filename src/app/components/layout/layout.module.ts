import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutComponent, TopBarComponent } from "@components/layout"

@NgModule({
  declarations: [
    LayoutComponent, 
    TopBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [LayoutComponent, TopBarComponent],
})
export class LayoutModule { }
