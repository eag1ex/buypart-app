### BUYPART Application
#### - [ Developed by Eaglex ](http://eaglex.net)

#### Overview
Simple e-commerce SPA/MVC application, display products to purchase. All available items area loaded into page from dummy data, featured items are displayed with premium banner.

* Angular/cli project and architecture
* Lazy loading feature
* Production ready
* Multi project support
* Fancy pre/load strategy
* Responsive design support, updates layout and format at different responsive/breakpoints
* Services and Libs in tree architecture
* Documented code
* Configurable theme with access to bootstrap and material variables



#### Live Demo
Hosted on heroku node.js server (_server has timeout limit_, free dyno):

```
access:
https://calm-stream-87021.herokuapp.com/login
login: eaglex
password: eaglex
```



#### Start
Open browser in `http://localhost:4200`

```sh
$/ npm start # initial start will compile angular
$/ npm run build:buypart # build production version to ./dist
```


#### Install
The Application was build on `node@~12.0.0` and `npm@~6.9.0`, {engineStrict} is set, not sure if it will run below those versions.

```sh
$/ npm install
```


#### Deadline
Build in 9 days.



#### Stack
Typescript, MVC, Angular 11/ CLI, Bootstrap, angular.material, SCSS, [ x-utils-es ](https://www.npmjs.com/package/x-utils-es)



#### Hierarchy
Application structure

* Projects:
    * buypart
    
* Libs:
  * buypart-pages 
    * buypart `(our lazy loaded application) and product-list.data input ` 
  * interfaces
  * material
  * utils
  * services:
    * ResponsiveService `(updates product layouts at breakpoint)`

  * theme:
    * scss `(styles base) libs\theme\scss\styles.scss`
    * product
    * product-prem
    * filter-nav
    * footer
    * quantity
    * icon `(manages our icons)`
    * image `(manages our images)`
    * main-layout
    * spinner
    * top-nav


#### Essention VSC plugins
- Angular Essentials (Version 11) `johnpapa.angular-essentials`
- Angular Language Service `angular.ng-template`
- Angular Schematics `cyrilletuzi.angular-schematics`
- Angular template formatter `stringham.angular-template-formatter`
- Auto Import `steoates.autoimport`
- Comment Anchors `exodiusstudios.comment-anchors`
- Prettier - Code formatter `esbenp.prettier-vscode`
- TSLint `ms-vscode.vscode-typescript-tslint-plugin`


#### NOTES
- Some animation disabled in mobile mode
- No @types support in TS for `x-utils-es`, will add later
- Did not have Adobe XD on my system, used .pdf > .ai file as visual reference
- No logo in header, only placeholder


#### TESTS
- Tested on latest Chrome and Firefox


#### Thank you
