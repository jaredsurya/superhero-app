# Superhero Team Builder
**WELCOME!** 

<img width="1285" alt="Screen Shot 2023-02-05 at 2 56 41 PM" src="https://user-images.githubusercontent.com/93106753/216841923-570cf393-3abe-4b47-b941-b45f0f8e98ef.png">

## Description

This project is a single page application, made with React and Rails API. It was made to fulfill the requirements of Flatiron School's phase 4 final project. During phase 4 of Flatiron studies, we learned how to use Ruby on Rails as a backend API. We paired this with React as the frontend. I chose to make this project about superheroes. I found a very useful site, superheroapi.com, which I used to seed my databases with superhero characters. 

Usage of this superhero app is simple and straightforward. The user must sign in or create an account to gain access. Once the user has been authenticated, they may pick up to 5 heroes from the "All Heroes" page. To view their compiled team, the user must go to the "My Team" page. There, you can seem your accumulated "team power" as well. On the next page, "All Teams", each user's team is shown along with its team power. Next, on the "My Profile" page, the user can create and update entries for "e-mail" and "bio".

**Superhero cards view:**
<img width="861" alt="Screen Shot 2023-02-05 at 2 57 38 PM" src="https://user-images.githubusercontent.com/93106753/216841976-a7a88024-90e9-455a-b926-fb28fa55fb46.png">

This app is currently deployed, and rendered at [superhero-app.onrender.com](https://superhero-app.onrender.com/).

View the video walkthrough [here](https://www.youtube.com/watch?v=FxLZ1pdILOk).

## E.R.D.

The diagram below shows the entity relationships as they are organized in this app. As you can see, users and heroes are joined together through the user-hero joins table in the middle. This allows for a many-to-many relationship between the users and heroes. Effectively, each user has many user-hero instances and thus has many heroes through the user-hero instances. Also, it follows that a hero can have many users through user-heros as well. The user-hero table contains the instances which make up each users' team. All of the matching user_ids inside the user-heros table make up a single team, pairing with the user which has that ID number.

![Screen Shot 2023-02-03 at 4 55 56 PM](https://user-images.githubusercontent.com/93106753/216843178-7bfb752d-ee03-4387-bf4e-59a474d5664a.png)

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm

See Setup below for instructions on installing these tools if you
don't already have them.

## Setup

If you haven't already, visit the resources pages below and install ruby, NodeJS, and npm.

After that, clone this repository and navigate to it in your terminal. Run `bundle install` followed by `rails db:migrate db:seed` and `npm install --prefix client`. Once everything has loaded, run `rails s` and `npm start --prefix client` to get your servers started. Now, the program will be live and accessed by visiting [localhost:4000](localhost:4000/).

## Resources

- [Flatiron School](https://flatironschool.com)
- [SuperheroAPI](https://superheroapi.com)
- [Ruby Install](https://github.com/postmodern/ruby-install#readme)
- [NodeJS Install](https://nodejs.org/en/download/)
- [NPM Install](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
