# Answers to Questions

## 1. Difference between getElementById, getElementsByClassName, querySelector / querySelectorAll

** getElementById() selects one element by its unique ID
** getElementsByClassName() selects multiple elements with the same
   class name and returns an HTMLCollection
** querySelector() selects the first matching element using CSS selector
** querySelectorAll() selects all matching elements and returns a NodeList
querySelector is more flexible because it supports all CSS selectors.


## 2. How do you create and insert a new element into the DOM?

First, create an element using:
document.createElement()

Then insert it using:
appendChild() or append()

Example:
const div = document.createElement("div");
div.innerText = "New Job";
document.body.appendChild(div);


## 3. What is Event Bubbling?

Event Bubbling is when an event starts from the target element and moves upward to its parent elements.

Example:
If you click a button inside a div, the click event first triggers on the button, then the div, then the body.



## 4. What is Event Delegation? Why is it useful?

Event Delegation means attaching an event listener to a parent element instead of multiple child elements.

It is useful because:
 It improves performance
 Works for dynamically created elements
 Reduces memory usage

## 5. Difference between preventDefault() and stopPropagation()

preventDefault():
Stops the default browser behavior

stopPropagation():
Stops the event from bubbling up to parent elements
