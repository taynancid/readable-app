# Readable

This is the second project for the React Nanodegree of Udacity.
This project was made with React, Redux (logic) and Bulma (ui) for the frontend.

## What is it

This is a simple forum web project with two major pieces: Posts and Comments

## Components

### Posts

Posts are the main objects in the page, they have:

- Title
- Author
- Body
- Category
- Time that was posted
- Number of comments
- Number of votes (it can be negative)

### Comments

Comments are always related to one post and they have:

- Author
- Body
- Time that was made
- Number of votes (it can be negative)

## How to use

### Main Page

On the main page the user can:

- Select posts by category, using the upright dropdown
- Click on a post to goes to that post page
- Edit and delete a post, going to the upright dropdown in the post card
- UpVote or downvote the post
- Sort posts by date or votecount

### Post Page

On the post page the user can:

- Edit and delete the post, same as the main page
- Add a comment, at the bottom of the page
- Edit, delete and vote for a comment

## Instructions to Run

- Install and start the API server

  ```
   cd api-server
   npm install
   node server
  ```

- In another terminal window, to start the front end

  ```
   cd frontend
   npm install
   npm start
  ```

## This project was made with

-[React](https://reactjs.org/) -[Redux](https://redux.js.org/) -[Bulma](https://bulma.io/)

## API Server

Information about the API server and how to use it can be found in its [README file](api-server/README.md).
