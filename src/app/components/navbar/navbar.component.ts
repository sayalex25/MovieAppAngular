/**
 * Este archivo contiene el componente de la barra de navegación.
 * Implementa la funcionalidad de búsqueda de películas y redirecciona a la página de resultados de búsqueda.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Realiza una búsqueda de películas y redirecciona a la página de resultados de búsqueda.
   * @param texto El texto de búsqueda ingresado por el usuario.
   */
  buscarPelicula(texto: string) {
    texto = texto.trim();
    if (texto.length === 0) {
      return;
    }
    this.router.navigate(['/buscar', texto]);
  }
}