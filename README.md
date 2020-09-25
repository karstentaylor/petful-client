# Petful Client

## App Name:

"Paws Welfare League"
(a Petful Project)

## Live App link:

https://dsa-petful-client-green.vercel.app

## Client Repo:

https://github.com/karstentaylor/petful-client.git

## API Server Repo:

https://github.com/karstentaylor/petful-server.git

## What is Paws Welfare League (a Petful Project)?

"Paws Welfare League" is a version of The Petful Project, a fullstack web-development project that is created around the principal of "FIFO"... first-in, first-out.

Where a user submits their name into a queue via the submission form on the homepage. When called to the "no. 1 spot", the user is given a message indicating their turn to "adopt" a fictional cat or dog from the available choices on the adoption page.

_"Here at "Paws Welfare League", the adoption process works on a "FIFO" ("First-In, First-Out") basis. It's a philosophy that was developed with local animal rescues to ensure that every cat and dog gets a loving home._
_So what are YOU waiting for...?_
_ENTER your name and CLICK the button below to JOIN the waiting list. Then once your name is pulled to the "#1 spot", you can ADOPT one of the pets in the available list."_

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

- GET returns a randomized list of people
- POST adds a new person to the list
- DELETE removes a person from the list

### ENDPOINT /api/pets

- GET returns the available "next in queue" pets for adoption

### ENDPOINT /api/pets/:pet_type

- DELETE removes a pet listing per the "pet type" chosen
