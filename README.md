Responder: si el formulario ya valida, ¿por qué también valida el servidor?
por que el formulario puede que su validación es muy por encima y si es que lo guarda y no puede el servidor mandaria que se creo pero realmente no existe
Responder: ¿por qué httpResource para leer y HttpClient para crear, editar y eliminar?
Por que creo que una nada mas puede leer informacion y el otro es para modificar por que seria muchas cosas que cargue un elemento
Responder: ¿qué pasa si se olvida el subscribe()?
el que esta de oyente que seria la pagina clases no cargaría la pagina es para notificar

Responder: ¿a qué pieza de React corresponden las rutas hijas (children), el interceptor y el guardia?
creo que seria los Routes y las rutas protegidas
Responder: ¿cuándo se ejecuta el guardia y por qué salir() tiene que navegar al login?
se ejecuta cuando no tiene una cuenta en el navegador y no esta con el rol de admin, por que el usuario podria seguir modificando cosas sin el tener el permiso

Responder: ¿por qué el estado del formulario no se puede observar con un computed()?
por que es un estado como tal y ese no se puede cambiar de estado 
Responder: ¿qué diferencia hay entre canActivate y canDeactivate, y qué casos no cubre la guarda de salida?
canActivate controla si puedes entrar a una ruta, mientras que canDeactivate controla si puedes salir de ella
Opcional, si hiciste el detalle: responder ¿por qué la ruta de crear va antes que la del id?
por que en la api se crean de esa forma y si en caso se pondría primero no se crearia


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
