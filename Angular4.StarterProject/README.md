# Angular4.StarterProject for basic routing

## Angular 4.0 basic router
The mapping of URLs to Components we want displayed on the page is done via A route in our application is defined by a mapping of a URL to a component or a redirect to another URL.

Array of Routes and then install them in our application by importing them into our NgModule using RouterModule.forRoot(routes).
![Picture](https://github.com/jankidepala/angular.4.ScaffoldProject/blob/master/Gittts/01_Router_Angular_4.0.png)

Directive called router-outlet needs to be added somewhere in template HTML. This directive tells Angular where it should insert each of those components in the route in app.component

  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
