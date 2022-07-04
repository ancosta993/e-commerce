# E-commerce Back End

## Description 
This application is an attempt to create back end of an e-commerce application. This application works with Products, their Categories, and the Tags that belongs to each Products. The data is stored and retrieved using relational database technique. This means, one to many and many to many relationships between these data are used. User can get all the Categories, Products, and Tags using the GET request. The user can use POST requrest to create data for Products, Categories, and Tags. The user can use PUT request to update all three of the data. Finally, the user can use DELETE request to delete all the above data.

## Table Of Content
- **[Description](#description)**
- **[Tools and Libraries](#tools-and-libraries)**
- **[Installation Instruction](#installation)**
- **[Usage Information](#usage)**
- **[Function](#function-psudocode)**

## Tools and Libraries
- Node.js
- Insomnia to test the routes
- MySQL relational database
- Sequelize (Object Relational Mapping) used for handling MySQL queries through JavaScript Classes.
- express.js for handling browser requests
- dotenv for handling sensitive user information such as datbase name and passwords
- mysql2 for connecting MySQL and Javascript

## Installation
The user needs to download Node.js, MySQL, Sequelize.  
Then, in the Node terminal, run the `npm install` command. After all the installations:  

- Clone the repository
- Create a `.env` named text file and fill in the fields DB_PASSWORD, DB_USER, DB_NAME
- Open command prompt and cd into the cloned repo file path
- log inti mysql using command `mysql -u [root] -p` (in the [] 'root' can be replaced with the username).
- run the command `source db/schema.sql`. This will create the Database.
- type in `quite` to exit the MySQL terminal.
- now, on the node terminal, run `node seeds`. This will enter the already available data regarding Products, Categories, and Tags in the seeds file.
- run the command `npm start` to start the server.

## Usage
After the seeding is done (see the installation instructions), the user can use relational database techniques, applied throguh MySQL, to GET the data. The data is sent in JSON format.  

- **GET all:**
  - sends all categories including any product belonging to the categories.
  - sends all products including the category they belongs to and any tags that belongs to the product.
  - send all tags inlcuding the products under which it belongs to.
- **GET one using ID in the params query:**
  - sends one category including any product belonging to the categories.
  - sends one product including the category they belongs to and any tags that belongs to the product.
  - send one tag inlcuding the products under which it belongs to.
- **POST**
  - Create a category by sending in request body JSON data. Ex. `{"category_name":"Laptops"}` to create a new catagory called Laptop in the database. It will initially have no products.  
  - Create a product by sending in request body JSON data. Ex. `{  
	"product_name": "Lenovo Legion",  
	"price":"1500",  
	"stock": "20",  
	"tagIds": [2, 3, 4],  
	"category_id": 6  
}`  The `category_id` is the foreign key which corresponds to the category this product will belong to. The `tagIds` is a list of tag ids that will belong to this new product. The initial tags are seeded through the seeds/ file. 
  - Create tag by sending in request body JSON data. Ex. `{"tag_name":"Electronics", "productIds":[5, 6]}` This creates a new tag named 'Electronics'. The products that contains this tag will have id 5 and 6. 
-**PUT**



