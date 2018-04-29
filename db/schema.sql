DROP  DATABASE IF EXISTS supplies_db;
CREATE DATABASE supplies_db;
USE supplies_db;

-- Create the table tasks.
CREATE TABLE supplies
(
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
supply VARCHAR(255) NOT NULL,
purchased BOOLEAN DEFAULT FALSE NOT NULL 
);
