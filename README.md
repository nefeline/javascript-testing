# Feed Reader Testing

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

In this project I developed a set of tests using [Jasmine](http://jasmine.github.io/) for a pre-existing web-based application that reads RSS feeds. These test the underlying business logic of the application as well as the event handling and DOM manipulation.

## Demo

https://nefeline.github.io/javascript-testing/

## How to install

1. Clone or download this repository
2. Unzip the files
3. Open index.html

## Using the App

When you open the App, you should see the feed list along with a Jasmine Test section at the bottom of the page. The test was built to ensure that:

1. RSS Feeds are defined and have a valid (not empty) name and URL.
2. The Menu is hidden by default and changes visibility when clicked.
3. There is at least one initial entry in the feed container.
4. When a new feed is loaded, the content actually changes.

You can check the complete test file in jasmine/spec/feedreader.js

## Dependencies

These tests were written using [Jasmine](http://jasmine.github.io/)