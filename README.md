# LAB - 04

## More extensions to about me

This project is a continuation of LAB 03. Code was refactored in programming pairs to include the use of functions for JavaScript

### Authors: Joseph Streifel & Emily Landers

### Links and Resources

* [Mozilla MDN](https://developer.mozilla.org/en-US/)
* [W3 Schools](https://www.w3schools.com/)

### Reflections and Comments

This lab felt more like an exercise in the process of paired programming than one in functions. Either way, things went smoothly. It was good practice for the process of forking/merging in Github.

<!-- # LAB - 03

## "About Me" Guessing Game Redux

This project is a continuation of LAB 02. Code was refactored to be DRY and additional features were added, such as a 6th and 7th question in the quiz.

### Author: Joseph Streifel

### Links and Resources

* [Mozilla MDN](https://developer.mozilla.org/en-US/)
* [W3 Schools](https://www.w3schools.com/)

### Reflections and Comments

The use of arrays and for loops in conjuction with each other is a very powerful tool. This utilizes that and refactors questions 1-5 to take up much less space. Previous code is preserved at the bottom of app.js for posterity. A 6th and 7th question have been added, one asking the user to guess a number and providing hints along the way, and another asking for one of 3 possible correct answers.

The requirements made a pretty explicit statment not to use functions, but I left the button in. Hopefully that's ok.

Added eslint for JS and had to change A LOT of formatting. Learned the proper use of `\` to allow for contractions in strings. Commenting out LAB - 02 readme contents for posterity. -->

<!-- # LAB - 02

## "About Me" Guessing Game

This project is a web page that includes a brief bio about me and a button to initiate a quiz for the user. Questions are all yes/no and the user will be notified if they got each question correct or incorrect after answering.

*The quiz does not currently account for answers outside of yes/no or y/n and will tell the user they got the question wrong if another input is provided*

### Author: Joseph Streifel

### Links and Resources

* None

### Reflections and Comments

The more I code the more I fall in love with JavaScript. When working on this project I created the structure of my HTML and then jumped right into mapping out and solving my JS. Pretty quickly I relized that a quiz using `prompt()` would ask the user questions before they get the chance to read the page, so I decided to make a button to begin the quiz. I also wanted to include the option to answer with yes/no or y/n so I included some OR logic in my JS and quickly learned that `(ans1 = "yes" || "y")` evaluates to true regardless of ans1's value. Strings evaluate to true, apparently!

Let's talk CSS. I struggle here and approached my CSS last. I think the final product came out looking pretty good, but I think I need to experiment more before I can produce pages that feel *crisp*. It turns out that getting a footer to stick to the bottom of the page isn't nearly as simple as I thought, so I learned a little bit about `display:flex` today. Before this, my only exposure was `display:float` and `display:block`. I'm still getting a handle on it but was able to accomplish what I wanted. -->
