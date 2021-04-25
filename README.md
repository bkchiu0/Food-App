# CS3200 Database Food App

Team: Database Design 40

Team members: Brian Chiu (Section 4)

Description: A food application that keeps track of users orders, requested food items, and their nutritional information.

## Tech Stack

- PostgreSQL database

- Java Spring Rest API

- React JS frontend

## Importing and Exporting the database

The exported database in the directory `./database` is exported via [`pg_dump`](https://www.postgresql.org/docs/13/app-pgdump.html).

To import the database, use the [`pg_restore`](https://www.postgresql.org/docs/13/app-pgrestore.html) command on `./database/postgres_db_dump.sql`.

`./database/postgres_db_dump.sql` contains all the SQL commands to restore the database.

### Database information

- user: postgres

- password: P@ssw0rd

- database name: cs3200

- schema: food

## Data Model

UML Diagram: [UML](db_design_final_project_UML.pdf)

### 1. User

User represents an account on the food app. Users can create orders and add/remove items from their orders.

### 2. Order

Order is a food order placed by a user. It consists of food items.

### 3. Item

Item is a sub component of an order. Represents an instance of a food in an order.

### 4. Food

Food represents the selection of available food to order.

### 5. FoodType (Portable Enumeration)

Enumeration of different food types like drinks, desserts, mains, or sides.

### 6. Nutritional Information

Contains the important macro and micro values for each food.

## Relationships

### User to Order

A user is related to many orders. Users can place many orders while using the food app.

### Order to Food

Many orders contain many foods. This many to many relationship is reified by a mapping class (Item). This removes redundancy of many orders ordering the same food like a burger.

## User Interface

The user interface contains lists and editors for 5 different classes:

1. User

2. Order

3. Item

4. Food

5. Nutritional Information
