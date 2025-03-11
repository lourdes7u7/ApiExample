export interface PokemonListResponse {
    count: number; 
    next: string | null;
    previous: string | null;
    results: { name: string; url: string }[];
  }

  //La intefaz se encarga de definir la estructura de los datos a recibir

  /**
   * count: Número total de Pokémon disponibles.
   * next y previous: URLs para paginación.
   * results: Un array de objetos, donde cada objeto contiene el name y url de un Pokémon
   */