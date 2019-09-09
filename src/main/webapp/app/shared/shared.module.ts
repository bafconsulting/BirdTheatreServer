import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BirdTheatreSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [BirdTheatreSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [BirdTheatreSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BirdTheatreSharedModule {
  static forRoot() {
    return {
      ngModule: BirdTheatreSharedModule
    };
  }
}
