# E-commerce Back End
Videos demonstrating this application can be found here: [video1](https://drive.google.com/file/d/1b_f3K_V0reasDn8BiFt-HUUed1ksJ5Vq/view), [video2](https://drive.google.com/file/d/1FGsRde95erc8_AM7SDkjCWXPqkFaIdjG/view)

## Description 
This application is an attempt to create back end of an e-commerce application. This application works with Products, their Categories, and the Tags that belongs to each Products. The data is stored and retrieved using relational database technique. This means, one to many and many to many relationships between these data are used. User can get all the Categories, Products, and Tags using the GET request. The user can use POST requrest to create data for Products, Categories, and Tags. The user can use PUT request to update all three of the data. Finally, the user can use DELETE request to delete all the above data.

## Table Of Content
- **[Description](#description)**
- **[Tools and Libraries](#tools-and-libraries)**
- **[Installation Instruction](#installation)**
- **[Usage Information](#usage)**
- **[Testing](#testing)**

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
- **PUT**
  - Update the title of a category given their ids. It is done by sending a body with {"category_name":"Gaming Laptop"} for example. If this request body is sent through the PUT request using the id of the category to change, then the category will change the title.  
  - The product can also be updated simillarly by sending the appropriate fields through body in JSON format. The PUT request must be made with the id of the product that is in question in the `params` section of the URL. For example: if we want to change some info of our newly created product named "Lenovo Legion" in "Laptops" categories, we will send the JSON body {"stock":"12", "price": 1700} in the URL with the id of our "Lenovo Legion" in the `params`. This will change the stocks and price data of our product.
  - The title of a tag can be updated if the req body containing the title is sent in a PUT request. The request must be created with the id of the tag in the URL `params` section. For example sending {"tag_name":"electronic"} to our newly created tag in the previous step to change its name to 'electronics'.
- **DELETE**
  - delete a category by sending a DELETE request with the id of the category in question in the `params` section. NOTE: deleting a category will not delete all the products that used to belong to the category. They will have NULL for their category_id foreign key.
  - delete a product by sending a DELETE request with the id of the product in question in the `params` section.
  - delete a tag by sending a DELETE request with the id of the tag in question in the `params` section.

## Testing
The application can be tested through Insomnia. 
 


