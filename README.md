Responder: ¿qué pieza de React Router corresponde a router-outlet, a routerLink y a routerLinkActive?
en react el Router equivale al <Outlet />, routerLink a <Link />, y routerLinkActive a NavLink

Responder: ¿por qué la ruta comodín (**) va al final y la ruta vacía necesita pathMatch: 'full'?
la ruta comodín va al final porque coincide con cualquier URL, y la ruta vacía requiere pathMatch: 'full' para evitar que coincida parcialmente con todas las rutas.

Responder: ¿dónde vive el valor de un campo en un formulario reactivo y en qué se diferencia del useState de React?
en el formulario reactivo el valor vive dentro de un árbol de objetos de FormControl/FormGroup, mientras que el useState vive en el estado del componente, que se reemplaza mediante actualizaciones
Responder: ¿qué regresa un validador propio cuando el valor es válido y cuando no, y cómo se relaciona con hasError?
manda el error si es que lo tiene mal, y si es valido no manda nada, lo que hace el hasError establece que es lo que va a ser el usuario para que mande el error es como establecerlo 

Responder: ¿qué cambió en el servicio del catálogo y por qué ningún componente se enteró?
cambio en que ahora se "encapsulara" en secciones para que no todas entren al mismo catálogo, por así decir que se movieron para que clases entre en un solo catálogo, no se enteraron por que se utilizo en otro componente el cual estará mas reservado.
Responder: ¿por qué no hizo falta iniciar sesión para leer el catálogo?
por qué en le app se va a restringir para que nada más sea para el admin, y como actualmente estamos diseñándolo pues no es tan necesario porque nos va a pedir el usuario cada que entremos  


# GimnasioAdmin

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.3.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
