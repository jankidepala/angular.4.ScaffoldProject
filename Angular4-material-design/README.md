# Angular4MaterialDesign

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Observable
`Observable.create()`
---The create(...) is a generic Observable factory method for creating an Observable in which you will explicitly dictate how values are passed to the Subscriber

----Observable.create(observer => observer.next(myArray))
----Observable.create(observer => {
     const timeoutId = setTimeout(() => {
       observer.next(0);
       observer.complete();
     }, 500);

     return () => clearTimeout(timeoutId);
   });

`Observable.from()`
-- Accepts a variety of types and convert them into observables like
Arrays
Promises
Generators
Observable-like things


## OPERATORS
Operators are functions that build on the observables foundation to enable sophisticated manipulation of collections. For example, RxJS defines operators such as map(), filter(), concat(), and flatMap().

# REACTIVE FORMS
Reactive forms have properties that use observables to monitor form control values. The FormControl properties valueChanges and statusChanges contain observables that raise change events. Subscribing to an observable form-control property is a way of triggering application logic within the component class. For example:

# Exponential backoff
Exponential backoff is a technique in which you retry an API after failure, making the time in between retries longer after each consecutive failure, with a maximum number of retries after which the request is considered to have failed. This can be quite complex to implement with promises and other methods of tracking AJAX calls. With observables, it is very easy:

# Dependencies
Dependencies are services or objects that a class needs to perform its function. DI is a coding pattern in which a class asks for dependencies from external sources rather than creating them itself.



