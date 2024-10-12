
# Backend API for Leaderboard 3W

## Description

This is the backend API for the Leaderboard 3W application. It provides endpoints for user management, claiming points, and retrieving claim histories. The application is built using Node.js, Express, and MongoDB.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [User Management APIs](#user-management-apis)
  - [Claim Points APIs](#claim-points-apis)
  - [Claim History APIs](#claim-history-apis)
  - [Point History APIs](#point-history-apis)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- Cors

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/leaderboard-3w-backend.git
   cd leaderboard-3w-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```plaintext
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```

The server will run on `http://localhost:5000`.

## API Endpoints

### User Management APIs

#### 1. **Create User**
   - **Endpoint:** `POST /api/users`
   - **Description:** Adds a new user to the database.
   - **Request Body:**
     ```json
     {
       "name": "New User",
       "email": "new.user@example.com"
     }
     ```

#### 2. **Get All Users**
   - **Endpoint:** `GET /api/users`
   - **Description:** Retrieves a list of all users.

#### 3. **Get User by ID**
   - **Endpoint:** `GET /api/users/:id`
   - **Description:** Retrieves a user by their ID.

#### 4. **Update User**
   - **Endpoint:** `PUT /api/users/:id`
   - **Description:** Updates user details by ID.
   - **Request Body:**
     ```json
     {
       "name": "Updated Name",
       "email": "updated.email@example.com"
     }
     ```

#### 5. **Delete User**
   - **Endpoint:** `DELETE /api/users/:id`
   - **Description:** Deletes a user by their ID.

### Claim Points APIs

#### 6. **Claim Points**
   - **Endpoint:** `POST /api/users/:id/claim`
   - **Description:** Awards random points (1-10) to the selected user and records the claim in the history.

### Claim History APIs

#### 7. **Get Claim History**
   - **Endpoint:** `GET /api/users/:id/claim-history`
   - **Description:** Retrieves the claim history for a specific user.

### Point History APIs

#### 8. **Get All Point Histories**
   - **Endpoint:** `GET /api/point-history`
   - **Description:** Retrieves all point histories.

## Usage

You can test the API using Postman or any other API client. Make sure to use the appropriate HTTP methods and include request bodies where required.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### How to Use

1. Replace the placeholder `<username>` and `<password>` in the MongoDB URI with your actual credentials.
2. Update the repository URL in the Installation section to point to your actual repository.
3. Customize any section as per your project needs.

