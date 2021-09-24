# Created_APIs_Task


 In this project i have covered following points:--

 implement following functionaility using NodeJS/Java as middleware (use any front-end and database of your choice)

1. User should be able to register with username and password
2. User should be able to login
3. A logged in user should be able to upload a file. For every uploaded file, there should be a unique 6 digit code generated.
4. An uploaded file should be saved on the file system for future reterival.
5. A logged in user should be able to view list of uploaded files for his profile.
6. A logged in user should be able to premanantly remove files from his profile.
7. The uploaded file should be available for downloading using a URL, and the user should be asked to enter the correct 6 digit code before the file is available for download.



In this project, I have made an APIs using Express framework of NodeJS.  I have also used JWT-authentication token to verify the if the user is valid or not. I have used  the mysql-database in which  USERS database and there is   users table and storing data in that. I've written different queries for different endpoints to make them  APIs working. 



# Installation process and Execution

First and foremost, If you'are using Linux-based-OS, open your terminal and install the latest version of NodeJS and npm. You do also need to install mysql database onto your system.  by writing the following commands can install NodeJS version-15 and npm version-7 on your system.

# sudo apt install nodejs

Next, you've to install mysql-database into your system. For this, write these following commands on your terminal.
# sudo apt-get update
# sudo apt-get install mysql-server





You can also check the version of NodeJS and npm by writing, node -v and npm -v on the terminal respectively. Next, you need to make a clone of this repository and get into the repository on your terminal. Now, you need to install the required dependencies from your package.json file. For this, you've to write sudo npm install.

There is a data.sql file already present in the database/ folder. You have to import this file to an empty database. For this, make a new database first, and navigate to the database/ directory. For checking the data, log into your user, by writing mysql -u <user_name> -p You would be asked for your password. Now, you can use database with all its tables data.

Next, navigate to the folder where, server.jsfile is located. You can start the local server by writingnode server.json the terminal. You can always kill your running port by writing,killall -9 nodemon the terminal. Now, you need to install postman, that helps you to develop APIs and getting responses from it, by writing the following commands on your terminal.

# sudo apt-get install snap
# snap install postman

# Required technologies:

-NodeJS 
-JWT 
-Mysql 
-multer 
-express 
-dotenv


