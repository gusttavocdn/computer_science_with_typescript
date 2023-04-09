# Computer Science with TS

## :page_with_curl: Summary

This project is basically a fork
of [The Arena Project Repository](https://github.com/the-arena-project/typescript-arenas) The goal
here was provide all the challenges in the original repository simplified for students who do not can pay for **The
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

We can't test if your code are or not using only the allowed functions but have in mind that if you do not follow these
instructions you will be only cheating yourself and delaying your learning process.

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
