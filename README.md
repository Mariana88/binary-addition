# [Binary Addition](https://www.codewars.com/kata/binary-addition)


"Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
The binary number returned should be a string."

* What is binary addition?
Summing up two numbers expressed in binary. A binary is a number expressed in base 2

calculating the binary: "Find the largest power of 2 you can subtract from your first number (left to right): put a 1 in that power's place and subtract the power. Proceed with the remainder untill the "0 power of 2" is reached. When you cannot subtract put a 0 in that power."

adding  binaries: like you would add a decimal, start from right to left. 1 + 1 = 10 (keep 0 and throw the 1 to the next column)

(See picture and add a thorough resource)


binaryAddition: Function
* Args: 2
  * num1: Number
  * num2: Number
* Return: String
  * string of 0s and 1s
* Behavior: Takes two numbers and returs a string with their sum in binary
'''js
// copy of your polished solution for easy reference.
'''


### Index
* [Input Classifications](#input-classifications)
* [Solution Explanation](#solution-explanation)
* [Constraints](#constraints)
* [Resource Estimation](#resource-estimation)
* [Scaffolding](#scaffolding)
* [Bugs & Challenges](#bugs-challenges) 
* [Language Features](#language-features)
* [Use Cases](#use-cases)
* [Learning Journal](#learning-journal)

---

## Input Classifications & Strategies

Assumption: only numbers will be passed. So no need for handling type conversions.

* Classifications:
- starting with a 0
- Negative or not
- Decimals Vs. whole numbers
(we want to keep those in mind because of the way JS handles type conversions this may be relevant)

* Strategies:
- add numbers -> convert to binary using an inherent methd -> convert to string
- add numbers -> convert to binary w/o using pre-built method -> convert to string
- convert both numbers to binary -> add binaries -> convert to string (either using or not inherent methods)


[TOP](#index)

___

## Solution Explanation

* Convert input numbers to binary
step 1) Use a for loop to calculate the highest power of 2 to use (starting from 2 to the power of 0)

step 2) build binary by subtracting the result of '2 to the given power' from the input number (if possible write to string 1 if not possible write 0) , store the remainder for the next subtraction of '2 to the next highest power' (if possible write to string 1 if not possible write 0), and so on untill '2 to the power of 0' is reached.

step 3) Iterate through binary strings to construct a new string based on string index, from the end to the beginning - and applying a logic which computes the right character between a combination of zeros and one (i.e. if 0 and 0 - write 0 ; if 0 and 1 - write 1 ; if 1 and 1 -write 0 and use an extra 1 in the next calculation).

[TOP](#index)

---

## Constraints

* Not to use an inherent method to convert to binary
* Convert to string before adding the numbers

[TOP](#index)

___


## Resource Estimation

Estimate how what resources you will require, and how much of each.  


[TOP](#index)

___

## Scaffolding

Provide a link to Gist you used to construct your solution's scaffolding.  What difficulties did you have making it?  How helpful was it in coming up with your finished solution?

[TOP](#index)

___

## Challenges & Bugs

What particular challenges & bugs did you come across when you were filling in your scaffolding?

Were they logic bugs? Language bugs? 

Did you have trouble keeping track of which part of the challenge you were solving?

[TOP](#index)

___

## Language Features

List the language features used in your solution.

The focus of these exercises are to strengthen you problem solving skills, not to learn the newest ES6 tricks. When you have the choice between to different language features it is better to choose the option that is easiest to read, most common, or most consistent with the rest of your solution.  

Keeping track of the language features you use will enable you separate the problem solving strategy from the implementation.  Being aware of this difference will be an asset later on when you're faced with larger applications and popular frameworks.

[TOP](#index)

---
## Use Cases

List 5+ use cases for your solution.  They can be stand-alone, part of an application, or impractical.  Your use cases can be overly complicated, or very basic. What's important is that you come up with as many and as diverse use cases as possible.


[TOP](#index)

---

## Learning Journal

Things I learned studying this problem:


New vocabulary:


Things I struggled with:


Lessons to apply for next time:



[TOP](#index)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

