# Lesson 4

## Hack Instagram challenge + Resolve Github conflicts + NOT logical operator + while loops + do while loops + for loops + break and continue statements + nested loops

### Instagram hack - what are we trying to accomplish?
https://i.imgur.com/SsNkESg.png

Solution -> https://i.imgur.com/hmu3G7D.png

```
const searchBar = document.querySelector('#......');

searchBar.onkeyup = function () { 
    if (searchBar.value === 'gameofthrones') {
        searchBar.style.background = 'red';
        
    } else {
        searchBar.style.background = ''
    }
```

## Homework

////////
Homework:
Create program what will tell ask you to paste your favorite image url into an input field and a number of your choice into an another input field and after clicking a submit button the program will display your favorite image # number of times.

In index.html:
1. Create new input element with placeholder "My favorite image".
2. Create new input element with placeholder "How many times?".
2. Create new button element with text "Submit" with an id="submitFavoriteImage".
3. Create new empty html div element with id="result".

In app.js:
1. Create new event listener for button with id="submitFavoriteImage".
2. Inside of the event listener use for loop to display that image # number of times in empty html div element with id="result".
3. Use specific width and height for image display.
////////
