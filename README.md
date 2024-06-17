# Portfolio Website v2

## Table of Contents
1. [Introduction](#introduction)
2. [Overall Design Intent](#overall-design-intent)
3. [Homepage](#homepage)
4. [Full Pages](#full-pages)
5. [Problems with v2](#problems-with-v2)
6. [Future Work](#future-work)

## Introduction
This portfolio website was made using HTML, CSS and vanilla JS. It builds upon v1 by improving the HTML layout, adding JS interactions and slightly changing the website aesthetic. The website layout and structure remains largely the same as v1. 

## Overall Design Intent
The design focuses on easy navigation and minimalistic aesthetics, tailored to the target audience of technical recruiters and software engineers. The use of dark mode aligns with developer preferences, and the color scheme was chosen to create a professional and tech-savvy environment.

## Homepage
The homepage serves as a summary hub, featuring:
- Personal blurb
- High-level resume snippet
- Top 3 projects
- Gallery slideshow
- Fun facts about myself

Key information is spotlighted, and navigation links are provided for deeper exploration into full pages.

## Full Pages
Detailed content is available on dedicated pages, including:
- Resume
- Projects
- Gallery

These pages offer comprehensive information for users who wish to delve deeper into my work and qualifications.

## Problems with v2
Ensuring that the design was responsive to all screen sizes was extremely difficult with having a side-header as the vertical height also had to be considered. As such, all media queries were a combination of width and height constraints. Furthermore, the JavaScript implementation for the dynamic in-page navigation links is slightly glitchy as there is both a Timeout function that ensures that the navigation links don’t glitch from switching amongst themselves too fast as well as another setInterval function that reinitialises the IntersectionObserver to ensure that all page sections are being evaluated at equal time intervals rather than only when the intersection ratio changes. Furthermore, the information popup bubbles for the tech stack sections required custom positioning based on the screen-size to ensure they fit but because it relied on the data attribute, I was unsuccessful in trying to style it to wrap into a column when the screen size was smaller. Even then, the bubbles are cutoff when the screen size becomes too narrow. Finally, rearranging all the elements for the mobile/tablet view after the side header was removed was very time-consuming as almost every single HTML element needed to be reconfigured and restyled to suit the new viewport size.

## Future Work
Future enhancements will focus on:
- Improving mobile responsiveness
- Adding JavaScript for dynamic navigation tools in mobile/tablet view
- Enhancing visual distinctions with hover animations
- Refining the image gallery layout

These improvements aim to further optimise the website’s functionality and user experience across different devices.

## References
- Bayburtsyan, T. (2017). Why Developers Prefer Dark Coding Themes. Medium.
- CodexWorld. (2023). How to Create and Display Loader Until the Page has Finished Loading using HTML CSS and JS.
- Nielsen, J. (1994). 10 Usability Heuristics for User Interface Design. Nielsen Norman Group.
- Pinch Studio. (n.d.). The logo colors of technology. 99designs.
- W3Schools. (n.d.). How TO - Filter Elements.
- W3Schools. (n.d.). How TO - Responsive Image Grid.
