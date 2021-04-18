INSERT INTO food.order (placed, user_id)
VALUES (CURRENT_TIMESTAMP, 1);

INSERT INTO food.order (placed, user_id)
VALUES (CURRENT_TIMESTAMP - INTERVAL '6h 30m', 1);

INSERT INTO food.order (placed, user_id)
VALUES (CURRENT_TIMESTAMP - INTERVAL '12h', 2);

INSERT INTO food.order (placed, user_id)
VALUES (CURRENT_TIMESTAMP - INTERVAL '1d', 3);

INSERT INTO food.order (placed, user_id)
VALUES (CURRENT_TIMESTAMP - INTERVAL '1d 12h', 4);