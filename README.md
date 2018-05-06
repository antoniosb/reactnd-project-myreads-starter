# MyReads Project

This project is my implementation of the first projecto from this nanodegree. It is intended to be a bookshelf with three categories: *"Read"* _(for books we've already read)_, *Currently Reading* _(for books we're still not done yet)_ and *Want to Read* _(for books we want to read in the future)_. Also, there is a search page, where we can type the __name__ or __author__ of a book to look for it on our collection so we can categorize it like described above.

## TL;DR

To run this project you'll need:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # The root component of this project.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── Book.js # This component represents a book and its properties.
    ├── BookList.js # This component represents a list of Books, and knows how to categorize them.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BookSearch.js # This component knows how to search books by author/name, and holds the state of the search, also can show the result of the search.
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    └── Shelf.js # This component is responsible for changing the shelf of a given book. Also it knows all the available shelfs.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

-----

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
