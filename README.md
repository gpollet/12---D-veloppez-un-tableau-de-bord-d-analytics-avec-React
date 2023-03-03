# 1. Installation

## 1.1 Prerequisites
* [NodeJS 18.14.2 or higher](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/)

## 1.2 Initializing the project
* Clone the repository or [download it](https://github.com/gpollet/12---D-veloppez-un-tableau-de-bord-d-analytics-avec-React/archive/refs/heads/master.zip) onto your computer
* In the *backend* folder, install the dependencies with the command `yarn`
* In the *frontend* folder, install the dependencies with the command `yarn`
* In the *frontend* folder, create a file named *.env*, add the following variables and replace the bold value types below with proper values (and respecting the case when relevant) :
	* VITE_USER_ID = **NUMBER**
	* VITE_USE_MOCK_DATA = '**boolean**'

# 2 Starting the project
* In the *backend* folder, start the API with the command `yarn start`
	* Backend can now be accessed through port 3000.
* In the *frontend* folder, start the React App with the command `yarn start`
	* Frontend can now be accessed through port 5173.

## 2.1 Display a specific user
To display a specific user, open the *.env* file you created and change the value of *VITE_USER_ID* to the corresponding userId.
* userId must be a number.
* Mocked data is available for userId = 12 and userId = 18

## 2.2 Switch between mock and API
Data can be obtained either through a mock, or through the API :
* To use mocked data, open the *.env* file you created and change the value of *VITE_USE_MOCK_DATA* to `'true'`
* To use data from the API, open the *.env* file you created and change the value of *VITE_USE_MOCK_DATA* to `'false'`

## 3. Endpoints^[]
### 3.1 Possible endpoints

This project includes four endpoints that you will be able to use:

-   `http://localhost:3000/user/${userId}`  - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
-   `http://localhost:3000/user/${userId}/activity`  - retrieves a user's activity day by day with kilograms and calories.
-   `http://localhost:3000/user/${userId}/average-sessions`  - retrieves the average sessions of a user per day. The week starts on Monday.
-   `http://localhost:3000/user/${userId}/performance`  - retrieves a user's performance (energy, endurance, etc.).

**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

### [](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard#42-examples-of-queries)3.2 Examples of queries

-   `http://localhost:3000/user/12/performance`  - Retrieves the performance of the user with id 12
-   `http://localhost:3000/user/18`  - Retrieves user 18's main information.


 [^1^](#fnref1) [ API Documentation Source](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard#41-possible-endpoints)