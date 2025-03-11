import { Injectable } from '@angular/core'; //Permite que el servicio sea intectado a otros componentes
import { HttpClient } from '@angular/common/http'; //Proporciona los metodo para hacer solicitudes HTTP
import { Observable } from 'rxjs'; // Es un tipo de dato que permite manejar flujos de datos asíncronos
import { PokemonListResponse } from '../interfaces/pokemon.interfaces'; // Es un tipo de dato que permite manejar flujos de datos asíncronos

@Injectable({
  providedIn: 'root', // Proporciona el servicio este disponible en toda la aplicación
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2'; //variable que contiene link del api

  constructor(private http: HttpClient) {} //Es una instancia de HttpClient que se usa para hacer solicitudes HTTP

  //Metodo para obtener la lista de Pokemon
  getPokemonList(limit: number = 20): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(
      `${this.apiUrl}/pokemon?limit=${limit}`
    );
  }
  /*
  getPokemonList: Es un método que hace una solicitud GET a la API para obtener una lista de Pokémon.
  limit: Es un parámetro opcional que limita el número de resultados.
  Observable<PokemonListResponse>: Indica que el método devuelve un Observable 
  que emite un valor de tipo PokemonListResponse.
  */

  //Metodo para obtener los detalles de un pokemon
  getPokemonDetails(nameOrId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon/${nameOrId}`);
  }
  /*
  getPokemonDetails: Es un método que hace una solicitud GET a la API para obtener 
  detalles de un Pokémon específico.
  nameOrId: Es el nombre o ID del Pokémon que se desea consultar.
  */
}