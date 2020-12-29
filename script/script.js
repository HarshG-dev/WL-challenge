
window.onload = function () {
"use strict";

// Select all the accordion class element
const SECTIONS = document.querySelectorAll(".accordion");

// Arrow function and add the toggle event listener
SECTIONS.forEach(accordion => {
    accordion.addEventListener("toggle", openOneSection)
});

// 'openOneSection' function to close the accordions which are 'open'
function openOneSection() {
    if (this.open) {
        SECTIONS.forEach(accordion => {
            if (accordion !== this && accordion.open) {
                accordion.open = false;
            }
        });
    }
}

}