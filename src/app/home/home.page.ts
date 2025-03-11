import { Component, OnInit } from '@angular/core'; //On init maneja el ciclo de vida
import { PokemonService } from '../services/api.service'; //sevicio creado para consumir el api
import { PokemonListResponse } from '../interfaces/pokemon.interfaces'; //La interfaz que define la estructura de la respuesta.

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  pokemonList:PokemonListResponse | null = null; // Almacena la lista de Pokémon
  isLoading: boolean = true; // variable para indicar si la página está cargando datos

  constructor(private pokemonService: PokemonService) {} // Inyecta el servicio

  //Es un método del ciclo de vida de Angular que se ejecuta cuando el componente se inicializa.
  ngOnInit() { 
    this.loadPokemonList();
  }

  //Método que llama al servicio para obtener la lista de Pokémon
  loadPokemonList() {
    this.pokemonService.getPokemonList().subscribe( //subscribe: Suscribe al Observable para recibir la respuesta de la API.
      (response: PokemonListResponse) => { //response: Contiene los datos de la API.
        this.pokemonList = response; // Almacena la respuesta
        this.isLoading = false; // Oculta el spinner de carga
      },
      (error) => {
        console.error('Error fetching Pokémon list', error);
        this.isLoading = false; // Oculta el spinner de carga en caso de error
      }
    );
  }
}