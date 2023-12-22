/**
 * 
 * Este archivo contiene el componente HomeComponent, que se encarga de mostrar la página de inicio de la aplicación.
 * El componente obtiene las películas de la cartelera y las muestra en una lista. También implementa una funcionalidad
 * de carga infinita, donde se cargan más películas cuando se llega al final de la página.
 * 
 * El componente también se encarga de inicializar y destruir el servicio PeliculasService, que se utiliza para obtener
 * las películas de la cartelera.
 */
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public movies: Movie[] = []
  public moviesSlideshow: Movie[] = []

  /**
   * Método que se ejecuta cuando el usuario hace scroll en la página.
   * Comprueba si se ha llegado al final de la página y, en ese caso, llama al servicio para obtener más películas.
   */
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop ) + 1300;
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight );
    if ( pos > max ) {
      // TODO: llamar el servicio
      if ( this.peliculasService.cargando ) { return; }
      this.peliculasService.getCartelera().subscribe( movies => {
        this.movies.push(...movies );
      });
    }
  }

  constructor( private peliculasService: PeliculasService ) { }

  /**
   * Método que se ejecuta al inicializar el componente.
   * Obtiene las películas de la cartelera y las asigna a las variables movies y moviesSlideshow.
   */
  ngOnInit(): void {
    this.peliculasService.getCartelera()
      .subscribe( movies => {
        this.movies = movies;
        this.moviesSlideshow = movies;
      })
  }

  /**
   * Método que se ejecuta al destruir el componente.
   * Resetea la página de la cartelera en el servicio PeliculasService.
   */
  ngOnDestroy() {
    this.peliculasService.resetCarteleraPage();
  }
}