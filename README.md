# Petful Server

## App Name:
"Homeward Bound" 
(a Petful Project)

## Live App link:
https://dsa-petful-client-james.vercel.app/

## Client Repo: 
https://github.com/thinkful-ei-panda/DSA_Petful_Client-chrissy-james

## API Server Repo: 
https://github.com/thinkful-ei-panda/DSA_Petful_Server-chrissy-james

## Pair Contributors: 
Chrissy Harmon, 
James Coffelt


## What is Homeward Bound (a Petful Project)?
"Homeward Bound" is our version of The Petful Project, a fullstack web-development project that is created around the principal of "FIFO"... first-in, first-out.

Whereby a user submits their name into a queue via the submission form on the homepage. When called to the "no. 1 spot", the user is given a message indicating their turn to "adopt" a fictional cat or dog from the available choices on the adoption page.


## Technology Stack Used
- CSS 3
- HTML 5
- JavaScript
- React & React-Router
- Node
- Express
- deployed to Heroku (server hosting)
- deployed to Vercel (Client hosting)


## API Calls
### ENDPOINT /api/people
* GET returns a randomized list of people
* POST adds a new person to the list
* DELETE removes a person from the list

### ENDPOINT /api/pets
* GET returns the available "next in queue" pets for adoption

### ENDPOINT /api/pets/:pet_type
* DELETE removes a pet listing per the "pet type" chosen 

