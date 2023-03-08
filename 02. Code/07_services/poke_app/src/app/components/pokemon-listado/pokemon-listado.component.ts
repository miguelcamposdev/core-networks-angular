import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon-response.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-listado',
  templateUrl: './pokemon-listado.component.html',
  styleUrls: ['./pokemon-listado.component.css'],
})
export class PokemonListadoComponent implements OnInit {
  listadoPokemon: Pokemon[] = [];
  pokemonSeleccionado!: Pokemon;
  constructor(private pokeService: PokemonService) {}

  ngOnInit(): void {
    this.pokeService.getAllPokemon().subscribe((respuesta) => {
      this.listadoPokemon = respuesta.results;
      this.pokemonSeleccionado = this.listadoPokemon[0];
    });
  }
}
