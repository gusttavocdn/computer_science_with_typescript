# Computer Science with TS

## :page_with_curl: Summary

This project is basically a fork
of [The Arena Project Repository](https://github.com/the-arena-project/typescript-arenas) The goal
here were provide all the challenges in the original repository simplified for students who can't pay for **The
Arena Course** now.

If you want to have the full experience you can access the site of the
project [The Arena Project](https://www.thearenaproject.co/) and subscribe in the course.

I intend to constantly update this repository as the original repository is updated as well.

## :rocket: How to make the Challenges

All the challenges are placed in the **src** folder listed by themes numerically in the recommended order.

In the folder of each theme you will find a **suggested_order.json** file. This file contains the order of the
challenges in the theme, you can following this order. All the challenges has his own **challenge-en.md** to describe
what you are supposed to do. Follow the instructions rigorously.

As a general rule, you should adopt that it is **EXPRESSLY PROHIBITED** to use functions that are not listed as allowed
directly in the instructions for each challenge.

This includes any methods of built-in objects like: Array.filter, Array.map, String.toLowerCase, etc.

The ESLINT rules will ensure that method not alloweds are not used. Have in mind that if you try to ignore the eslint the local tests for your challenges can pass, but you will not be able to commit your work until all the rules are fixed.

## :rocket: How to test your code

You can test your code by running the following command:

```bash
#npm test "themeFolder" "challenge"

#example

npm test 01_fundamentals print-string #test the challenge print string on fundamentals
```

if you want to test all the challenges in a theme folder just run

```bash
#npm test "themeFolder"

#example

npm test 01_fundamentals
```
