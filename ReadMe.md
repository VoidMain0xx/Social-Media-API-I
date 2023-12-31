# Postaway Social Media Project

## Project Overview

The "Postaway" project is a social media application with a vision to create a platform that allows users to create, share, and engage with posts. The application is built using the Express-Node framework and implements various features, including user registration and authentication, post creation, liking, commenting, and more.

## Project Components

### 1. Architecture

The project follows a scalable architecture using ExpressJS, which separates data management, application logic, and routing control.

### 2. ES6 Modules

The codebase utilizes ES6 Modules to maintain code modularity and organization.

### 3. In-Memory Data Structures

In-memory data structures are used for post, like, comment, and user management operations.

### 4. User Authentication

The project includes a login and registration system, allowing users to register and log into their accounts.

### 5. Post Features

- Create a post
- View all posts
- View details of a specific post
- Like and remove the like from a post
- Comment on a post
- Update and delete posts and comments
- View profile posts
- Get all likes and comments on a specific post

### 6. Error Handling

A custom error class is created to set status codes and error messages. An error handler middleware is used to send custom error messages.

### 7. Authentication Tokens

Json Web Tokens (JWT) are used to create, verify, and manage authentication tokens. All application routes are secured using JWT, excluding the user routes.

### 8. File Upload

A file upload middleware is implemented to store and manage post media.

### 9. Logger Middleware

A logger middleware logs request URL and body for all routes, excluding the user routes.

## Additional Functionality

The project includes additional functionality to maximize its features:

1. Filter posts based on captions
2. Save posts as drafts and archive posts
3. Sorting of posts based on user engagement and date
4. Bookmark a post
5. Pagination for posts and comments

## API Structure

### User Routes

- **POST /api/signup**: Register a new user account
- **POST /api/signin**: Log in as a user

### Post Routes

- **GET /api/posts/all**: Retrieve all posts
- **GET /api/posts/:id**: Retrieve a specific post by ID
- **GET /api/posts/user/:userId**: Retrieve posts based on user credentials
- **POST /api/posts**: Create a new post (includes image upload functionality)
- **DELETE /api/posts/:id**: Delete a specific post by ID
- **PUT /api/posts/:id**: Update a specific post by ID (includes image upload functionality)

### Comment Routes

- **GET /api/comments/:id**: Retrieve all comments for a specific post
- **POST /api/comments/:id**: Add a new comment to a specific post
- **DELETE /api/comments/:id**: Delete a specific comment by ID
- **PUT /api/comments/:id**: Update a specific comment by ID

### Like Routes

- **GET /api/likes/:postId**: Retrieve all likes for a specific post
- **GET /api/likes/toggle/:postId**: Toggle like status for a specific post

## Project Structure

The project is structured into various components:

- **Models**: Representing data structures for users, posts, comments, and likes.
- **Controllers**: Handling the business logic and interfacing with the models.
- **Routes**: Defining API routes and utilizing controllers.
- **Middlewares**: For handling authentication, error, file upload, and logging.


## Clone the Postaway Repository

To get started with the **Postaway** social media project, follow these steps to clone the repository:

1. Open your terminal.

2. Choose or create a directory where you want to store the project files.

3. Run the following command to clone the repository:

   ```bash
   [git clone https://github.com/your-username/postaway.git](https://github.com/VoidMain0xx/Social-Media-API-I.git)


## Conclusion

The "Postaway" social media project aims to provide a comprehensive and user-friendly platform for social interaction and content sharing. The implemented features and additional functionality enhance the overall user experience.

---

**Note**: This is a high-level overview, and actual implementation details may vary based on project requirements and specifications.
