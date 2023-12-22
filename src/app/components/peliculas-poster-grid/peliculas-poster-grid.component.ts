/**
 * Componente de Angular que muestra una cuadrícula de pósters de películas y permite navegar a la página de detalles de una película al hacer clic en su póster.
 * Recibe una lista de películas como entrada utilizando la directiva @Input.
 */
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {
  @Input() movies: Movie[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // console.log(this.movies);
  }

  /**
   * Navega a la página de detalles de la película al hacer clic en su póster.
   * @param movie La película seleccionada.
   */
  onMovieClick(movie: Movie) {
    this.router.navigate(['/pelicula', movie.id]);
  }
}