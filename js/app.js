/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables for javascript app
 *
 */
// get navbar__list element
const navbarList = document.getElementById('navbar__list')
// get all the sections in document
const sections = document.querySelectorAll('section')
// get `page__header` header element
const pageHeader = document.querySelector('header.page__header')
// get `scroll_to_top` buttom
const scrollTopButton = document.getElementById('scroll_to_top')

// set observer options
const options = {
  // set the point for observer watcher
  rootMargin: '-50px 0px 0px 0px',
  // fire observer functionality at `60%` from element
  threshold: 0.6,
}

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

/**
 * nav list builder
 * @description build the nav
 * @param null
 */
const navListBuilder = () => {
  let navUL = ''
  // looping over all sections
  sections.forEach(sect => {
    const sectID = sect.id
    const sectNavDataAttr = sect.dataset.nav
    // adding every list item element navUL
    navUL += `<li><a class="menu__link" href="#${sectID}">${sectNavDataAttr}</a></li>`
  })
  // append navUL to navigation element `<ul id="navbar__list"></ul>`
  navbarList.innerHTML = navUL
}

/**
 * section observer
 * @description Add class 'active-sect' to section when near top of viewport Using Observer
 */
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    //  checking if elemnent is enter to viewport
    if (entry.isIntersecting) {
      // add `active-sect` to intersection section
      entry.target.classList.add('active-sect')
      // add highlight to active section
      navbarList.querySelector(`a[href="#${entry.target.id}"]`).classList.add('active')
    } else {
      // remove `active-sect` from other sections
      entry.target.classList.remove('active-sect')
      // remove highlight to active section
      navbarList.querySelector(`a[href="#${entry.target.id}"]`).classList.remove('active')
    }
  })
}, options)

/**
 * @description Scroll to anchor ID using scrollTO event
 * @param null
 */
const scrollToSection = () => {
  const hashLinks = document.querySelectorAll('.menu__link')
  hashLinks.forEach(hashLink => {
    hashLink.onclick = function (e) {
      // get id name from a anchor href attribute
      // const moveToIdName = hashLink.attributes.href.value.slice(1)
      // Or
      const moveToIdName = e.target.hash.slice(1)
      // get scroll amount from offsettop
      const moveTo = document.getElementById(moveToIdName).offsetTop - 50
      console.log(moveTo);
      console.log(e.target);
      // prevent Default link behavior
      e.preventDefault()
      window.scrollTo({
        // block: 'start',
        top: moveTo,
        behavior: 'smooth',
      })
    }
  })
}

/**
 * checking scrolling
 * @description When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
 * @param null
 */
const checkScrolling = () => {
  let prevScrollpos = window.pageYOffset
  let isScrolling

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      pageHeader.style.transform = `translateY(0)`
    } else {
      pageHeader.style.transform = `translateY(-${pageHeader.scrollHeight}px)`
    }
    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling)

    /**
     * make pageHeader visible after 50ms
     * Set a timeout to run after scrolling ends
     */
    isScrolling = setTimeout(function () {
      // show nav bar
      pageHeader.style.transform = `translateY(0)`
    }, 50)
    prevScrollpos = currentScrollPos
  }
}

/**
 * scroll to top
 * @description adding scroll to top button functionality
 * @param null
 * */
const scrollToTop = () => {
  document.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopButton.style.right = '1rem'
    } else {
      scrollTopButton.style.right = '-5rem'
    }
  })
  scrollTopButton.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
}

// make sections collapsible
const makeSectionsCallapse = () => {
  sections.forEach(sect => {
    sect.querySelector('h2').addEventListener('click', function () {
      // return  this.nextElementSibling.classList.contains('content-callaps')
      // sect.style.height = 0
      this.nextElementSibling.classList.toggle('callapsed')
      this.classList.toggle('callapsed-sign')
      // console.log(this);
    })
  })
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// fire Events after dom loaded
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
