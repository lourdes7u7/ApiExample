import { Component, OnInit } from '@angular/core';
//Es un servicio de Angular que proporciona acceso a los parámetros de la ruta actual. 
// En este caso, se usa para obtener el nombre del Pokémon desde la URL.
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/api.service'; //Para obtener los datos del Pokemon desde la URL

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
  standalone: false
})
export class PokemonDetailsPage implements OnInit {
  pokemonDetails: any; //Almacena los detalles del Pokémon obtenidos de la API. 
  // Se usa any porque la estructura de los datos puede variar
  isLoading: boolean = true; //Indicador de que estan cargando los datos

  constructor(
    private route: ActivatedRoute, //Se inyecta el servicio ActivatedRoute para acceder a los parámetros de la ruta actual.
    private pokemonService: PokemonService //Se inyecta el servicio PokemonService para hacer solicitudes HTTP a la API
  ) {}

  ngOnInit() {
    //btiene el parámetro name de la URL. Por ejemplo, si la URL es /pokemon-details/pikachu, pokemonName será 'pikachu'
    const pokemonName = this.route.snapshot.paramMap.get('name'); 
    if (pokemonName) {
      this.loadPokemonDetails(pokemonName); //Llama al método loadPokemonDetails para obtener los detalles del Pokémon
    }
  }

  loadPokemonDetails(name: string) {
    this.pokemonService.getPokemonDetails(name).subscribe( 
      (response: any) => {
        this.pokemonDetails = response;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching Pokémon details', error);
        this.isLoading = false;
      }
    );
  }
}

/**
 * this.pokemonService.getPokemonDetails(name): Llama al método getPokemonDetails del servicio para obtener los detalles del Pokémon.
 * 
 * subscribe: Suscribe al Observable para recibir la respuesta de la API.
 * 
 * response: any: Contiene los datos del Pokémon obtenidos de la API.
 * 
 * this.pokemonDetails = response: Almacena los detalles del Pokémon en la propiedad pokemonDetails.
 * 
 * this.isLoading = false: Oculta el spinner de carga cuando los datos se han cargado correctamente.
 * 
 * error: Maneja errores en caso de que la solicitud falle. Muestra un mensaje en la consola y oculta el spinner de carga
 */