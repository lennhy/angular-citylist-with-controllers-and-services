# City List

## Objectives

- Create a CityListController
- Create an element for Controller binding
- Show 5 cities with names and population in the view using ng-repeat
- Build an add city method in the CityListController
- Use $inject method for minification

## Instructions

run
```
> npm install
```
to use tests
```
karma start
```

Setup the directory structure as follows before running tests

```
├── js/
│   ├── app/
│   │   ├── controllers/
│   │   ├── app.js
│   ├── angular.js
├── index.html

```

You can find `index.html` and `angular.js` in this repo.

Create a new module in `js/app/app.js`, named `app`.

Create a controller named `CityListController` inside `js/app/controllers/CityListController.js` and attach it to a module named `app`.

Don't forget to initiate our module `app` using `ng-app` on a HTML element - otherwise we won't see anything!

We need to declare out js dependencies in the index.html page as well with `<script>` tags

Initiate our controller `CityListController` using `ng-controller` on a HTML element inside our previous one.

Inside `CityListController`, assign some values to the `ControllerAs` object `this`.

Now, we need to display these values inside our HTML. Using `{{ }}` (double curlys), display the values you created.

Use $inject with the $scope and $timeout built-in Angular services.
