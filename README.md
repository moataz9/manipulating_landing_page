# Landing Page Project

## Table of Contents

- [Instructions](#instructions)
- [app parts](#app_parts)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## app_parts

### Define Global Variables

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
