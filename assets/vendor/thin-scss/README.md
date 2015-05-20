# THiN SASS Framework

THiN is a minimalistic mobile first SASS framework designed to provide a pattern oriented approach front end design. Relying primarily on common HTML patterns and best practices, THiN leverages an intentionally weak structural system to provide a basic reusable design platform for front-end designers to build upon.
-----------------------
### Grid

The CSS grid uses a new approach to web grids
* The parent element defines the base grid for the elements
* Each element defaults to 1/X of the parent grid so

	<div class="grid--4">
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
	</div>

* Each .col will default to 1/4 of the parent width
* Adding a col--x will make the columns wider

  <div class="grid--4">
		<div class="col col-2"></div>
	</div>

	<div class="grid--4">
		<div class="col col--3"></div>
	</div>

* col--2 will be 50% of grid-4's width
* col--3 will be 75% of grid-4's width

* Thin suppots grid divions from 1 to 12
* In order to support tablet and desktop layouts you can add .tablet--x or desktop--x to 

	<div class="grid--2 tablet--4 desktop--5">
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
	</div>

* .col will be 1/2 (50%) in mobile, 1/4 (25%) and in desktop 1/5 (20%)
* .col--2 will be 2/2 (100%) in mobile, 2/4 (50%) in tablet and 2/5 (40%) in desktop

### How to use

* Download the zip file
* Import the thin.scss file near the top of your SASS document
* If you want to modify the site just add variables above the SASS import

	$gutter  				      // Adjusts the gutter between grid columsn
	$desktop 				      // Adjusts the middle desktop grid breakpoint
	$tablet  				      // Adjusts the desktop grid breakpoint
	$global-footer-height // This defines the height of the sticky footer at the bottom of your page change to 0 for no sticky footer
	$site-max-width       // Controls the max width of the site




### Root pattern
    <body>
      <header></header>
      <div role="main"></div>
      <footer></footer>
    </body>

### Module
    <div class="module">
      <header></header>
      <footer></footer>
    </div>