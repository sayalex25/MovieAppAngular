/**
 * Este archivo contiene la clase AppPage que representa una página de la aplicación.
 * Proporciona métodos para navegar a la página y obtener el texto del título.
 */
import { browser, by, element } from 'protractor';

export class AppPage {
  /**
   * Navega a la página de la aplicación.
   * @returns Una promesa que se resuelve cuando la navegación se completa.
   */
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  /**
   * Obtiene el texto del título de la aplicación.
   * @returns Una promesa que se resuelve con el texto del título.
   */
  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}