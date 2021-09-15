# LAB - 02

## "About Me" Guessing Game

This project is a web page that includes a brief bio about me and a button to initiate a quiz for the user. Questions are all yes/no and the user will be notified if they got each question correct or incorrect after answering.

*The quiz does not currently account for answers outside of yes/no or y/n and will tell the user they got the question wrong if another input is provided*

### Author: Joseph Streifel

### Links and Resources

* None

### Reflections and Comments

The more I code the more I fall in love with JavaScript. When working on this project I created the structure of my HTML and then jumped right into mapping out and solving my JS. Pretty quickly I relized that a quiz using `prompt()` would ask the user questions before they get the chance to read the page, so I decided to make a button to begin the quiz. I also wanted to include the option to answer with yes/no or y/n so I included some OR logic in my JS and quickly learned that `(ans1 = "yes" || "y")` evaluates to true regardless of ans1's value. Strings evaluate to true, apparently!

Let's talk CSS. I struggle here and approached my CSS last. I think the final product came out looking pretty good, but I think I need to experiment more before I can produce pages that feel *crisp*. It turns out that getting a footer to stick to the bottom of the page isn't nearly as simple as I thought, so I learned a little bit about `display:flex` today. Before this, my only exposure was `display:float` and `display:block`. I'm still getting a handle on it but was able to accomplish what I wanted.