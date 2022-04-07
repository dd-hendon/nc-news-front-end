# NC News Front End

## Deployed Site

https://nc-news-dd-hendon.netlify.app/

## Project Summary

The front end of a reddit style news aggregate website with articles, comments and votes. Styled to match the Northcoders brand. Built using React.

The hardcoded logged in user can browse articles. These can be filtered by selecting the topic headers. The site header returns to viewing all articles. The filter bar allows for sorting by date, votes and comments. The sort order can be inverted.

Individual articles can be upvoted or downvoted. The user can also leave a comment on the article. The results of voting and commenting are optimistically rendered. Comments associated with the article are displayed below. The user can delete their own comments.

Error handling is in place to cover voting, commenting and bad urls.

## Back End API

This site requests data from:
https://github.com/dd-hendon/nc-news

## Local Version Requirements

- node v16.13.1
- npm 8.1.2

## Local Setup

- Navigate to a desired folder and open the terminal
- `git clone https://github.com/dd-hendon/nc-news-front-end.git`
- cd into the created folder
- Run `npm i` to install packages and dependencies
- Run `npm start` to run the app locally and load it in the browser
