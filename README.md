# GNavbar -- a standalone navbar for your responsive layout web page, adapted from Bootstrap

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

With GNavbar, you don't have to worry about navigation problem about your web page! It's robust, it's smooth and it's responsive (get it? 🤣). 

Adapted from the mighty Bootstrap v3.0.3, you can squash navbar's responsive layout problem now like a bug🐛.

## How it works

click <<[DEMO](https://sgyzetrov.github.io/GNavbarDemo/index.html)>> and start testing navbar's responsive layout and all that stuff!

## What's included

```
GNavbar/
├── css
│   ├── main.css
│   └── nav.css
└── js
    ├── bootstrap.min.js
    ├── page_function_scripts.js
    └── stickUp.min.js
```

## Usage

To add GNavbar in your web page, you need to include some `.css` and `.js` files in your `.html` file.

e.g.

```HTML
<!-- navbar adapted from Bootstrap -->
<head>
<!-- ... -->
<link href="css/nav.css" rel='stylesheet' type='text/css'>
<!-- ... -->
</head>
    
<body>
<!-- ... -->
<div class="navbar navbar-default" role="navigation">
<!-- ... -->
</div>
<!-- ... -->
<script src="js/bootstrap.min.js"></script>
<script src="js/stickUp.min.js"></script>
<script src="js/page_function_scripts.js"></script>   
<!-- ... -->
</body>  
```

`nav.css` is navbar's css file.

`main.css` has a section for navbar's implementation in practical web page.

e.g.

```CSS
/* main.css */
/*---- Navbar at the top of the page ----*/
.page-top-menu {
    min-height:110px;
    background-color:#82bd86;
    z-index: 5000;
    width:100%;
}

.page-top-menu .navbar-toggle {
    margin-top: 38px;
}

.page-top-menu .navbar-brand {
    padding: 0;
    margin: 30px 0 0 0;
}

.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
    background-color: rgba(37, 168, 43, 0.801);
    color:#fff;
}

.nav > li > a {
    color: #9bdb60;
}

.navbar-default {
    background-color:#82bd86;
    border:none;
}

.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
    background-color: #3C6850;
    color:#fff;
}

.navbar {
    margin-bottom: 0px;
}

.collapse {
    display: none;
}

.collapse.in {
    display: block;
}

.collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    -webkit-transition: height 0.35s ease;
            transition: height 0.35s ease;
}

@media (min-width: 768px) {
    .navbar-nav > li > a {
        padding-top: 9px;
        padding-bottom: 9px;
    } 
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}
/*---- /.Navbar at the top of the page ----*/
```

`bootstrap.min.js`, `page_function_scripts.js` and `stickUp.min.js`  will be required in order for GNavbar to function.

## See demo's source code for more details.