# Social-Network-API

## Table of Contents 

<details>
<summary>Table of Contents</summary>

- [Overview](#overview)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [The challenge](#the-challenge)
  - [Video](#video)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

</details>

## Overview

### Description

Using MongoDB, Express.js, and the Mongoose ODM to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.


### Installation

Because this is a back end application that runs from a machine and not a browser, it can't be deployed to GitHub pages. If anyone ever wants to look at the application, you have to clone it to your own local machine and run it from there.


### Usage

Create a .env file in root directory, and enter your own DB_NAME, DB_USER, and DB_PW. After that running npm run seed in terminal, and the application will be invoked by using the following command: node server.js. Using Insomnia to check results.

### The challenge

Users should be able to:

- check the CRUD operation of the User, Thought, Friend, and Reaction

### Video

- Video link(Categories): [https://drive.google.com/file/d/1SRKfPGSTyXIOD7u9TAOq6n4Q0OYZqvPr/view](https://drive.google.com/file/d/1SRKfPGSTyXIOD7u9TAOq6n4Q0OYZqvPr/view)

- Video link(Products): [https://drive.google.com/file/d/1kBmeYQhkGBXDsX9WjW2MCpSEUM3yVGYT/view](https://drive.google.com/file/d/1kBmeYQhkGBXDsX9WjW2MCpSEUM3yVGYT/view)

- Video link(Tags): [https://drive.google.com/file/d/1Z7tgF0pyTxKz9MfJYeyl4ab_i8UJunNr/view](https://drive.google.com/file/d/1Z7tgF0pyTxKz9MfJYeyl4ab_i8UJunNr/view)

### Links

- Solution URL: [https://github.com/YangLongWang/Social-Network-API](https://github.com/YangLongWang/Social-Network-API)

## My process

### Built with

- JavaScript

### What I learned

- use MongoDB and Mongoose to set models and controllers

To see how I add code snippets, see below:

```JS
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      validate: {
        validator: function(v) {
          return /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
        },
        message: props => `${props.value} is not a valid email.`
      },
      required: [true, 'User email required']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

getUserById({ params }, res) {
  User.findOne({ _id: params.userId })
  .populate({
    path: 'thoughts',
    select: '-__v'
  })
  .select('-__v')
  .populate({
    path: 'friends',
    select: '-__v'
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
}
```

## Author

- Github - [Longyang Wang](https://github.com/YangLongWang)
