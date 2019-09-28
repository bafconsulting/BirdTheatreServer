import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'broadcast-stream',
        loadChildren: () => import('./broadcast-stream/broadcast-stream.module').then(m => m.BirdTheatreBroadcastStreamModule)
      },
      {
        path: 'upload',
        loadChildren: () => import('./upload/upload.module').then(m => m.BirdTheatreUploadModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BirdTheatreEntityModule {}
