# Portfolio Website Design Report

## Introduction
This provides an overview of the design and development of my portfolio website. The website serves as an online resume, showcasing my front-end development capabilities and providing technical recruiters with a detailed resource to assess my competencies.

## Table of Contents
1. [Introduction](#introduction)
2. [Prototyping](#prototyping)
3. [Overall Design Intent](#overall-design-intent)
4. [Homepage](#homepage)
5. [Full Pages](#full-pages)
6. [Design Decisions](#design-decisions)
7. [Learnings](#learnings)
8. [Challenges](#challenges)
8. [Conclusion](#conclusion)
9. [Future Work](#future-work)

## Prototyping
### Wireframes and Sketches
Initial design concepts were developed using wireframes and sketches. These low-fidelity prototypes guided the layout and structure of the site, ensuring a user-friendly experience from the outset.

### High-Fidelity Prototypes
High-fidelity designs were created to refine the visual and functional aspects of the site. These prototypes include detailed color schemes, typography, and interactive elements to closely simulate the final product.

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

## Design Decisions
### Consistent Navigation
A top header and sidebar provide constant navigation options, making it easy for users to explore the site without getting lost.

### Visual Aesthetics
Minimalist design principles were applied to reduce visual clutter. The color palette and layout choices aim to enhance readability and user engagement.

### Accessibility and Usability
Design decisions were guided by Nielsen’s Usability Heuristics, ensuring the site is user-friendly and accessible. Features like breadcrumb navigation and contextual help are implemented to improve the user experience.

## Learnings
I previously had experience in using HTML and CSS so learning how to improve website interactivity and implement additional functionalities using JavaScript greatly improved the resulting website. I also learned to appreciate semantic HTML tags as it made the HTML code much more readable. Implementation efficiency was also greatly improved by carefully weighing up the advantages and disadvantages between CSS vs JavaScript animations. With CSS, I had to grow more conscious of the naming to ensure that I haven’t accidentally reused the same name which would create ‘styling conflicts’. 

## Challenges
Ensuring that the design was responsive to all screen sizes was extremely difficult with having a side-header as the vertical height also had to be considered. As such, all media queries were a combination of width and height constraints. Furthermore, the JavaScript implementation for the dynamic in-page navigation links is slightly glitchy as there is both a Timeout function that ensures that the navigation links don’t glitch from switching amongst themselves too fast as well as another setInterval function that reinitialises the IntersectionObserver to ensure that all page sections are being evaluated at equal time intervals rather than only when the intersection ratio changes. Furthermore, the information popup bubbles for the tech stack sections required custom positioning based on the screen-size to ensure they fit but because it relied on the data attribute, I was unsuccessful in trying to style it to wrap into a column when the screen size was smaller. Even then, the bubbles are cutoff when the screen size becomes too narrow. Finally, rearranging all the elements for the mobile/tablet view after the side header was removed was very time-consuming as almost every single HTML element needed to be reconfigured and restyled to suit the new viewport size.

## Conclusion
This report outlines the design journey from initial concepts to final high-fidelity prototypes, highlighting key design decisions and their rationale. The portfolio website successfully combines professional presentation with a personal touch, creating an effective online resume.

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
