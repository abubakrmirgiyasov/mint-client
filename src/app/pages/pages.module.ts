import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { PagesRoutingModule } from '@pages/pages-routing.module';

@NgModule({
  declarations: [],
  imports: [PagesRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule {}
