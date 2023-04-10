# Computer Science with TS

- [Portuguese Docs](https://github.com/gusttavocdn/computer_science_with_typescript/blob/main/README.md)

## :page_with_curl: Summary

This project is basically a fork of [The Arena Project](https://www.thearenaproject.co/) course.The goal
here was providing all the challenges in the original repository, since it is open, simplified for students who can't
pay for **The Arena Course** now.

All the challenges in this repository have the goal of making you delve deep into several computer science themes that
are common to any programming language.If you get stuck in any challenge, remember that Google is your best friend. You
can also
ask for help from friends and contact me on [LinkedIn](https://www.linkedin.com/in/gustavocdn/) or discord with
the `GusttavoCDN#3784` tag.

Try not to get full answers to the challenges but to understand the concepts in each one.

Since the original creator, [Kevin Piacentini](https://github.com/kevinpiac) is a former student of **42**, this
project has a high similarity to the teaching method of **42**.

As a student of **42** too,
it is also my duty to invite you to know the school.It is probably the best **Software Engineer**
program that I've ever seen.

- [**42**SP](https://www.**42**sp.org.br/)
- [**42** Youtube Channel](https://www.youtube.com/c/ForadaNormaPodcast)
- [Ecole **42**](https://**42**.fr/en/homepage/)

## :rocket: How to make the Challenges

All the challenges are placed in the **src** folder listed by themes numerically in the recommended order.

In the folder of each theme, you will find a **suggested_order.json** file. This file contains the order of the
challenges in the theme, you can follow this order. All the challenges have his own **challenge-en.md** to describe
what you are supposed to do. Follow the instructions rigorously.

As a general rule, you should adopt that it is **EXPRESSLY PROHIBITED** to use functions that are not listed as allowed
directly in the instructions for each challenge.

This includes any methods of built-in objects like: Array.filter, Array.map, String.toLowerCase, etc.

The ESLINT rules will ensure that not allowed methods aren't being used.Have in mind that if you try to ignore the
eslint, the
local tests for your challenges can pass, but you will not be able to commit your work until all the rules are fixed.

My suggested approach in order to organize your work and also provide ways to compare against other people's work that
might be doing these challenges is the following:

1. ###### **_Clone this repository_**
   ```bash
      git clone git@github.com:gusttavocdn/computer_science_with_typescript.git
      cd computer_science_with_typescript
      npm install
   ```

2. ###### **_Make a branch for your work_**

   ```bash
      git checkout -b "your-branch-name"
   ```

3. ###### **_Commit your work as a pull request_**

   ```bash
      git add .
      git commit -m "your-commit-message"
      # This syntax is only necessary on the first push. After that you can use "git push"
      git push -u origin "your-branch-name" 
   ```

## :rocket: How to test your code

You can test your code by running the following command:

```bash
#npm test "themeFolder" "challenge"

#example

npm test 01_fundamentals print-string #test the challenge print string on fundamentals
```

if you want to test all the challenges in a theme folder, just run

```bash
#npm test "themeFolder"

#example

npm test 01_fundamentals
```
