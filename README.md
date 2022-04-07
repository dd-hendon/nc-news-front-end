# NC News Front End

## Deployed Site

https://nc-news-dd-hendon.netlify.app/

## Project Summary

The front end of a news aggregate website with articles, comments and votes. Built using React.

Articles can be filtered by selecting the topic headers. The site header returns to viewing all articles. The filter bar allows for sorting by date, votes and comments. The sort order can be inverted.

Articles can be upvoted or downvoted. The user can comment on an article. The results of these actions are optimistically rendered.

Comments associated with the article are displayed below it, and the user can delete their own comments.

Error handling is in place to cover voting, commenting and bad urls.

## Back End API

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
