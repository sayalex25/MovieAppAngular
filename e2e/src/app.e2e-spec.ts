/**
 * El archivo app.e2e-spec.ts contiene un conjunto de pruebas de extremo a extremo para la aplicación peliculasApp.
 * La prueba comprueba que la página principal muestra un mensaje de bienvenida.
 * Además, la función afterEach se utiliza para verificar que no se hayan emitido errores graves por parte del navegador durante la ejecución de las pruebas.
 */

import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('¡La aplicación peliculasApp está en ejecución!');
  });

  afterEach(async () => {
    // Verificar que no haya errores emitidos por el navegador
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});