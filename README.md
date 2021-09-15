# Landing Page Project

## Table of Contents

- [Features](#Features)
- [app_development](#app_development)
- [Define_Global_Variables](#Define_Global_Variables)
- [MainFunctions](#MainFunctions)
- [BeginEvents](#BeginEvents)

## Features

> - Nav list was built dynamically as an unordered list.
> - It is clear which section is being viewed while scrolling through the page with active-sect class.
> - When clicking an item from the nav_list menu, the link is scrolling smoothly to the appropriate section and will heighlighted as acitve section in the viewport.
> - When clicking an up button it will take you to top of page

## app_development

### Define_Global_Variables

```js
// define element for the app
const navbarList, sections, pageHeader, scrollTopButton;

// define observer options
const options;
```

### MainFunctions

```js
navListBuilder()
observer.observe()
scrollToSection()
checkScrolling()
scrollToTop()
makeSectionsCallapse()
```

### BeginEvents

```js
// fire event with addEventListener
window.addEventListener('load', () => {
  // Build menu
  navListBuilder()
  // Set sections as active when get in the viewport
  sections.forEach(sect => {
    observer.observe(sect)
  })
  // Scroll to section on link click
  scrollToSection()
  // manipulating nav while scrolling
  checkScrolling()
  // manipulating scorll Top button
  scrollToTop()
  // make sections callapsing
  makeSectionsCallapse()
})
```
