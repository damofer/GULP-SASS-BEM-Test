Project developed by:

David Mogollon Fernandez.
Front End Dev.

Functional Link to hosted website :

http://minilink.es/3ic7

Used tools:

Gulp--
	gulp-uglify
 	gulp-sass
 	gulp-plumber
 	gulp-livereload
 	gulp-imagemin
 	gulp-autoprefixer

Basic Structure Tree:

<!--Index of Basic Structure:

nav
	nav__logo
	nav__list
		nav__list__item
		nav__list__item--selected
		nav__list__search
			nav__list__search__ico

banner
	banner__img
	banner__content
		banner__content__title
		banner__content__subtitle
		banner__content__button

secondNav
	secondNav__list
		secondNav__list__item
	secondNav__social
		secondNav__social__message
		secondNav__social__icoList
			secondNav__social__icoList__item

content
	content__list
		content__list__item
			content__list__item__title
			content__list__item__description
			content__list__item__media

footer
	footer__list
		footer__list__section
			footer__list__section__category
			footer__list__section__subcategory

	footer__copyrights
 -->

 *CSS Preprocessors:
 --SASS -SCSS

 *Used Notation HTML/CSS
 --BEM Notation.

 File Description:

 SASS-Folder:--> Contains all .SCSS files used in this project.
 	_main.scss 	    --> File that attach and import all the project files.
 	_variables.scss --> This File contains the variables used in all the other files aswell as the mixins
 	_secondNav.scss --> This File contains the visual settings for the middle navigation bar.
 	_main-nav.scss  --> This File contains the visual setting for the top - main navigation Bar (Logo included)
 	_footer.SCSS    --> File that controls the visual settings of the footer
 	_content.scss   --> File that contains the visuals settings of the content section.
 	_basics.scss    --> File that contains the default settings of the dimensions of the web components
  	_banner.scss    --> File that controls the visual content of the slider

 IMG - FOLDER -->Contains all images used in this project.
 	content folder    --> This Folder contains the images for the content section.
 	social-ico folder --> This Folder contains the social icons for the middle navigation bar.

 gulpfile.js  --> This file contains the automation tools used in this project.

 build folder --> This folder contains the compiled files
 		css folder --> contains compiled main.css and main.min.css
 		js folder --> contains compiled javascript files.


 index.html --> main html file.
