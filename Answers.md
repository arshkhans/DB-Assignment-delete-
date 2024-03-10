# DB-Assignment

1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.
- There is a 1 to 1 relation between "Product" and "Product_Category", i.e. for each "Product" there is a "Product_Category".

2. How could you ensure that each product in the "Product" table has a valid category assigned to it?
- Make they foregin key not null, which ensures that each product in the "Product" table has a valid category assigned to it.

3. Create schema in any Database script or any ORM (Object Relational Mapping).
- Node.js, sequlize ORM, databse: postgresql
