CREATE TABLE food.user (
id SERIAL PRIMARY KEY NOT NULL,
first_name VARCHAR(50),
last_name VARCHAR(50),
username VARCHAR(50) NOT NULL,
password VARCHAR(100) NOT NULL,
email VARCHAR(50) NOT NULL,
date_of_birth DATE
);

CREATE TABLE food.food_type (
food_type VARCHAR(50) PRIMARY KEY NOT NULL
);

CREATE TABLE food.order (
id SERIAL PRIMARY KEY NOT NULL,
description TEXT,
placed TIMESTAMP NOT NULL,
user_id INT NOT NULL,
CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES food.user(id)
);

CREATE TABLE food.food (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(100) NOT NULL,
description TEXT,
price REAL NOT NULL,
food_type VARCHAR(50) NOT NULL,
CONSTRAINT fk_type FOREIGN KEY(food_type) REFERENCES food.food_type(food_type)
);

CREATE TABLE food.item (
id SERIAL PRIMARY KEY NOT NULL,
order_id INT NOT NULL,
food_id INT NOT NULL,
CONSTRAINT fk_order FOREIGN KEY(order_id) REFERENCES food.order(id),
CONSTRAINT fk_food FOREIGN KEY(food_id) REFERENCES food.food(id)
);

CREATE TABLE food.nutritional_information (
id SERIAL PRIMARY KEY NOT NULL,
calories INT NOT NULL,
total_fat_g REAL NOT NULL,
cholesterol_mg REAL NOT NULL,
sodium_mg REAL NOT NULL,
carbohydrates_g REAL NOT NULL,
protein_g REAL NOT NULL,
food_id INT NOT NULL UNIQUE,
CONSTRAINT fk_food FOREIGN KEY(food_id) REFERENCES food.food(id)
);