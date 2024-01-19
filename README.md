## 📝 TypePrint - Your Markdown Editor and Preview Tool

TypePrint is a modern Markdown editor built, designed to provide real-time preview of Markdown content. It is good for writing, previewing, and fine-tuning your Markdown files.

## 🚀 Features

- Real-Time Preview
- Synchronized Scrolling
- User-Friendly Interface
- Saves in Local Storage, so you don't lose your work.
- Extended Markdown Support:
  - Headings (H1 - H6)
  - Bold and Italic Text
  - Strikethrough
  - Blockquotes
  - Inline Code
  - Horizontal Rules
  - Highlighted Text
  - Links and Images
  - Unordered (Bullet) Lists

## 📦 Technologies

- `CSS`
- `React`
- `TypeScript`

## 📝 TypePrint - Your Markdown Editor and Preview Tool

TypePrint is a modern Markdown editor built, designed to provide real-time preview of Markdown content. It is good for writing, previewing, and fine-tuning your Markdown files.

## 🚀 Features

- Real-Time Preview
- Synchronized Scrolling
- User-Friendly Interface
- Saves in Local Storage, so you don't lose your work.
- Extended Markdown Support:
  - Headings (H1 - H6)
  - Bold and Italic Text
  - Strikethrough
  - Blockquotes
  - Inline Code
  - Horizontal Rules
  - Highlighted Text
  - Links and Images
  - Unordered (Bullet) Lists

## 📦 Technologies

- `CSS`
- `React`
- `TypeScript`

## 🍊 Process

I started by making the UI, focusing on getting the text from the textarea to show up in the preview area right away.

Then I worked on the Markdown features. I began with headings because I already had an idea for that.

Next was bold text, which was trickier. I did some research online about how to make text bold. I saw many functionalities involving regex. However, I didn't use regex because I'm not very familiar with it.

As a result, I ended up trying to figure it out myself. I used a while loop and for loop to make a function that turns text bold in HTML. This function looks for `**` or `__` and makes the text between them bold.

After that, I made similar functions for italics and other features. The bold text function was the trickiest part, but once that was done, it was easier to make the other functions.

The whole process was about building things step by step, starting with the basics and adding more features as I went.

## 📚 What I Learned

I got a chance to use while loops and other types of loops a lot. It had been a while since I last used them this much, so it was good practice.

In this project, I worked with `dangerouslySetInnerHTML`, which is used for adding HTML directly to a web page. I learned that it needs to be used very carefully because bad scripts could get into the site.

So, I handled it in a way where I created special functions to convert Markdown to HTML. These functions identify the correct parts of Markdown and safely turn them into HTML.

By doing this, I made sure that no dangerous code, like a script that might try to steal information I don't have or cause problems on the site, got through.

## 💡 Future Improvements

- Adding the ability to write:
  - Ordered Lists
  - Tables
  - Code Blocks
  - Task Lists
- Adding the ability to export Markdown to PDF format.
- Ability to save Markdown files to your local machine.
- Supporting additional Markdown extensions for more versatility.

## 🐛 Bugs and Issues

It has some issues with nessted markdown elements, like a list inside a blockquote, or a blockquote inside a list.

## 🚦 Running the Project

To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` or `yarn` in the project directory to install the required dependencies.
3. Run `npm run start` or `yarn start` to get the project started.
4. Open [http://localhost:5173](http://localhost:5173) (or the address shown in your console) in your web browser to view the app.

## 💡 Future Improvements

- Adding the ability to write:
  - Ordered Lists
  - Tables
  - Code Blocks
  - Task Lists
- Adding the ability to export Markdown to PDF format.
- Ability to save Markdown files to your local machine.
- Supporting additional Markdown extensions for more versatility.

## 🐛 Bugs and Issues

It has some issues with nessted markdown elements, like a list inside a blockquote, or a blockquote inside a list.

## 🚦 Running the Project

To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` or `yarn` in the project directory to install the required dependencies.
3. Run `npm run start` or `yarn start` to get the project started.
4. Open [http://localhost:5173](http://localhost:5173) (or the address shown in your console) in your web browser to view the app.
