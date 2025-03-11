import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PokemonDetailsPage } from './pokemon-details.page';
import { PokemonDetailsPageRoutingModule } from './pokemon-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PokemonDetailsPageRoutingModule,
  ],
  declarations: [PokemonDetailsPage],
})
export class PokemonDetailsPageModule {}