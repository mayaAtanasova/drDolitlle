# DrDolittle

A web app for a local vet clinic, who has decided to offer its clients the option to post pet listings.
A single-page application.


## Back-end
Back-end developed with Node.js and Express.  The back-end takes care of user authentication and authorisation through JWT.  The user and pet listing data is kept in a MongoDB non-relational database.  The logo design, as well as the overall UI/UX design have been done by me as well.

## Front-end
Front-end developd with Angular, implementing routing, route guards, front-end authentication, authorisation and data validation.

## Features
### Authentication and authorization
The system is role-based.
* Unauthenticated users can browse the home page and pet listings
* Registered users can additionally edit and delete their own listings
* The users registered as moderators can edit or delete all listings
* The user with role admin can can edit or delete all listings, as well as has access to the admin page to administer other services (future development)
* An HttpInterceptor is implemented to attach the authentication token with every request.

### Route guards and redirects
* The admin user is redirected to the admin page after login, non-admin users cannot navigate to the admin page manually
* The moderators are redirected to the page with all listings upon login
* Newly registered users, as well as users that login, are redirected to the home page

### Lisitngs functionality
The page where all pet listings are published offers the following functionality:
* The listings are paginated in groups of 6 per page, loaded with Angular animation
* Logged-in users can filter their own ads with a press of a button
* All users can filter the listings by type (offering, looking for or selling a pet)
* Non logged-in users do not see and cannot navigate to the 'add new' page

The 'new' and 'edit' pages for a lisitng make use of the same form, which is automatically populated with data in the latter case.
* The form is pre-validated on the front-end showing the user relevant errors.  The form can only be submitted if it is valid
* Users can upload a picture, preview it on the form, or delete the loaded picture from the form. Only .jpg and .png files are allowed
* Only the owner of the listing, the moderators and admin have access to the edit page, or can delete a listing
* When a user tries to delete a listing a confirmation modal shows up, to prevent accidental deletion

## Purpose
Developed as a final project for the Soft Uni Angular course
