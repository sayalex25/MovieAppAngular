/**
 * Archivo: cast-slideshow.component.ts
 * 
 * Este archivo contiene el código para el componente de presentación de diapositivas de reparto.
 * El componente muestra una presentación de diapositivas de los miembros del reparto de una película o serie.
 * Utiliza la biblioteca Swiper para crear la presentación de diapositivas.
 * El componente recibe los datos del reparto a través de la propiedad de entrada "cast".
 */

import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Cast } from '../../interfaces/credits-response';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {
  @Input() cast: Cast[];

  constructor() { }

  ngOnInit(): void {
    // console.log(this.cast);
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });
  }
}