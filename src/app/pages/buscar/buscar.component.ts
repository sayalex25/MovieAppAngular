/**
 * Este componente es responsable de buscar películas basadas en el texto proporcionado.
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  public texto: string = '';
  public movies: Movie[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService
  ) { }

  ngOnInit(): void {
    // Obtener el texto de búsqueda de los parámetros de la ruta
    this.activatedRoute.params.subscribe(params => {
      this.texto = params.texto;

      // Llamar al servicio de películas para buscar películas
      this.peliculasService.buscarPeliculas(params.texto).subscribe(movies => {
        this.movies = movies;
      });
    });
  }
}