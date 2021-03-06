--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: food; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA food;


ALTER SCHEMA food OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: food; Type: TABLE; Schema: food; Owner: postgres
--

CREATE TABLE food.food (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    price real NOT NULL,
    food_type character varying(50) NOT NULL
);


ALTER TABLE food.food OWNER TO postgres;

--
-- Name: food_id_seq; Type: SEQUENCE; Schema: food; Owner: postgres
--

CREATE SEQUENCE food.food_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE food.food_id_seq OWNER TO postgres;

--
-- Name: food_id_seq; Type: SEQUENCE OWNED BY; Schema: food; Owner: postgres
--

ALTER SEQUENCE food.food_id_seq OWNED BY food.food.id;


--
-- Name: food_type; Type: TABLE; Schema: food; Owner: postgres
--

CREATE TABLE food.food_type (
    food_type character varying(50) NOT NULL
);


ALTER TABLE food.food_type OWNER TO postgres;

--
-- Name: item; Type: TABLE; Schema: food; Owner: postgres
--

CREATE TABLE food.item (
    id integer NOT NULL,
    order_id integer NOT NULL,
    food_id integer NOT NULL
);


ALTER TABLE food.item OWNER TO postgres;

--
-- Name: item_id_seq; Type: SEQUENCE; Schema: food; Owner: postgres
--

CREATE SEQUENCE food.item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE food.item_id_seq OWNER TO postgres;

--
-- Name: item_id_seq; Type: SEQUENCE OWNED BY; Schema: food; Owner: postgres
--

ALTER SEQUENCE food.item_id_seq OWNED BY food.item.id;


--
-- Name: nutritional_information; Type: TABLE; Schema: food; Owner: postgres
--

CREATE TABLE food.nutritional_information (
    id integer NOT NULL,
    calories integer NOT NULL,
    total_fat_g real NOT NULL,
    cholesterol_mg real NOT NULL,
    sodium_mg real NOT NULL,
    carbohydrates_g real NOT NULL,
    protein_g real NOT NULL,
    food_id integer NOT NULL,
    carbohydratesg real,
    proteing real,
    total_fatg real
);


ALTER TABLE food.nutritional_information OWNER TO postgres;

--
-- Name: nutritional_information_id_seq; Type: SEQUENCE; Schema: food; Owner: postgres
--

CREATE SEQUENCE food.nutritional_information_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE food.nutritional_information_id_seq OWNER TO postgres;

--
-- Name: nutritional_information_id_seq; Type: SEQUENCE OWNED BY; Schema: food; Owner: postgres
--

ALTER SEQUENCE food.nutritional_information_id_seq OWNED BY food.nutritional_information.id;


--
-- Name: order; Type: TABLE; Schema: food; Owner: postgres
--

CREATE TABLE food."order" (
    id integer NOT NULL,
    description text,
    placed timestamp without time zone NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE food."order" OWNER TO postgres;

--
-- Name: order_id_seq; Type: SEQUENCE; Schema: food; Owner: postgres
--

CREATE SEQUENCE food.order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE food.order_id_seq OWNER TO postgres;

--
-- Name: order_id_seq; Type: SEQUENCE OWNED BY; Schema: food; Owner: postgres
--

ALTER SEQUENCE food.order_id_seq OWNED BY food."order".id;


--
-- Name: user; Type: TABLE; Schema: food; Owner: postgres
--

CREATE TABLE food."user" (
    id integer NOT NULL,
    first_name character varying(50),
    last_name character varying(50),
    username character varying(50) NOT NULL,
    password character varying(100) NOT NULL,
    email character varying(50) NOT NULL,
    date_of_birth date
);


ALTER TABLE food."user" OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: food; Owner: postgres
--

CREATE SEQUENCE food.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE food.user_id_seq OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: food; Owner: postgres
--

ALTER SEQUENCE food.user_id_seq OWNED BY food."user".id;


--
-- Name: food id; Type: DEFAULT; Schema: food; Owner: postgres
--

ALTER TABLE ONLY food.food ALTER COLUMN id SET DEFAULT nextval('food.food_id_seq'::regclass);


--
-- Name: item id; Type: DEFAULT; Schema: food; Owner: postgres
--

ALTER TABLE ONLY food.item ALTER COLUMN id SET DEFAULT nextval('food.item_id_seq'::regclass);


--
-- Name: nutritional_information id; Type: DEFAULT; Schema: food; Owner: postgres
--

ALTER TABLE ONLY food.nutritional_information ALTER COLUMN id SET DEFAULT nextval('food.nutritional_information_id_seq'::regclass);


--
-- Name: order id; Type: DEFAULT; Schema: food; Owner: postgres
--

ALTER TABLE ONLY food."order" ALTER COLUMN id SET DEFAULT nextval('food.order_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: food; Owner: postgres
--

ALTER TABLE ONLY food."user" ALTER COLUMN id SET DEFAULT nextval('food.user_id_seq'::regclass);


--
-- Data for Name: food; Type: TABLE DATA; Schema: food; Owner: postgres
--

COPY food.food (id, name, description, price, food_type) FROM stdin;
1	Onigiri	White rice wrapped in seaweed that is formed into a circular/triangular shape.	1.5	APPETIZER
2	Tonkotsu Ramen	Ramen dish with a pork bone broth. Comes with pork, eggs, and bamboo shoots.	8.5	MAIN
3	Jasmine Rice	Long grain white rice.	2.5	SIDE
4	Mochi Ice Cream	Japanese mochi (pounded sticky rice) with an ice cream filling.	5	DESSERT
5	Green Tea	Hot brewed green tea.	1	DRINK
6	Soy Sauce	Made from fermented soy bean paste. Salty with a strong umami flavor.	0.99	CONDIMENT
10	Miso Soup	Soup made from miso paste, which is from fermented soy beans. Comes with tofu, seaweed, scallions, and possibly mushrooms.	1.99	APPETIZER
\.


--
-- Data for Name: food_type; Type: TABLE DATA; Schema: food; Owner: postgres
--

COPY food.food_type (food_type) FROM stdin;
APPETIZER
MAIN
SIDE
DESSERT
DRINK
CONDIMENT
\.


--
-- Data for Name: item; Type: TABLE DATA; Schema: food; Owner: postgres
--

COPY food.item (id, order_id, food_id) FROM stdin;
1	1	1
2	1	2
3	1	4
4	1	5
5	2	1
6	2	6
7	3	2
8	3	3
9	3	4
10	4	3
11	4	4
12	4	5
13	4	6
14	5	1
15	5	2
16	5	3
17	5	4
18	5	5
19	5	6
\.


--
-- Data for Name: nutritional_information; Type: TABLE DATA; Schema: food; Owner: postgres
--

COPY food.nutritional_information (id, calories, total_fat_g, cholesterol_mg, sodium_mg, carbohydrates_g, protein_g, food_id, carbohydratesg, proteing, total_fatg) FROM stdin;
1	100	5	15	50	50	15	1	\N	\N	\N
2	800	30.5	34.8	100	84.2	42	2	\N	\N	\N
3	150	0	0	10	40	5	3	\N	\N	\N
4	200	20	10	5	30	5	4	\N	\N	\N
5	10	0	0	0	0	0	5	\N	\N	\N
6	10	0	0	50	5	0	6	\N	\N	\N
7	10	0	0	50	5	2	10	\N	\N	\N
\.


--
-- Data for Name: order; Type: TABLE DATA; Schema: food; Owner: postgres
--

COPY food."order" (id, description, placed, user_id) FROM stdin;
2	\N	2021-04-13 09:51:11.274256	1
3	\N	2021-04-13 04:21:11.274256	2
4	\N	2021-04-12 16:21:11.274256	3
5	\N	2021-04-12 04:21:11.274256	4
1	Brian's first order	2021-04-13 12:01:12	1
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: food; Owner: postgres
--

COPY food."user" (id, first_name, last_name, username, password, email, date_of_birth) FROM stdin;
2	Sid	Rad	sidrad	pass	email1	\N
3	Tej	Patel	tpatel	postgres	email2	\N
4	Neil	Patel	np1234	mongo	email3	\N
5	pg	admin	postgres	root	pg@domain	\N
1	Brian	Chiu	chiub	test	email0	1999-03-03
\.


--
-- Name: food_id_seq; Type: SEQUENCE SET; Schema: food; Owner: postgres
--

SELECT pg_catalog.setval('food.food_id_seq', 10, true);


--
-- Name: item_id_seq; Type: SEQUENCE SET; Schema: food; Owner: postgres
--

SELECT pg_catalog.setval('food.item_id_seq', 24, true);


--
-- Name: nutritional_information_id_seq; Type: SEQUENCE SET; Schema: food; Owner: postgres
--

SELECT pg_catalog.setval('food.nutritional_information_id_seq', 7, true);


--
-- Name: order_id_seq; Type: SEQUENCE SET; Schema: food; Owner: postgres
--

SELECT pg_catalog.setval('food.order_id_seq', 8, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: food; Owner: postgres
--

SELECT pg_catalog.setval('food.user_id_seq', 7, true);


--
-- Name: food food_pkey; Type: CONSTRAINT; Schema: food; Owner: postgres
--

ALTER TABLE ONLY food.food
    ADD CONSTRAINT food_pkey PRIMARY KEY (id);


--
-- Name: food_type food_type_pkey; Type: CONSTRAINT; Schema: food; Owner: postgres
--

ALTER TABLE ONLY food.food_type
    ADD CONSTRAINT food_type_pkey PRIMARY KEY (food_type);


--
-- Name: item item_pkey; Type: CONSTRAINT; Schema: food; Owner: postgres
--

ALTER TABLE ONLY food.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);


--
-- Name: nutritional_information nutritional_information_pkey; Type: CONSTRAINT; Schema: food; Owner: postgres
--

ALTER TABLE ONLY food.nutritional_information
    ADD CONSTRAINT nutritional_information_pkey PRIMARY KEY (id);


--
-- Name: order order_pkey; Type: CONSTRAINT; Schema: food; Owner: postgres
--

ALTER TABLE ONLY food."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);


--
-- Name: nutritional_information unique_food_id; Type: CONSTRAINT; Schema: food; Owner: postgres
--

ALTER TABLE ONLY food.nutritional_information
    ADD CONSTRAINT unique_food_id UNIQUE (food_id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: food; Owner: postgres
--

ALTER TABLE ONLY food."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: item fk_food; Type: FK CONSTRAINT; Schema: food; Owner: postgres
--

ALTER TABLE ONLY food.item
    ADD CONSTRAINT fk_food FOREIGN KEY (food_id) REFERENCES food.food(id);


--
-- Name: nutritional_information fk_food; Type: FK CONSTRAINT; Schema: food; Owner: postgres
--

ALTER TABLE ONLY food.nutritional_information
    ADD CONSTRAINT fk_food FOREIGN KEY (food_id) REFERENCES food.food(id);


--
-- Name: item fk_order; Type: FK CONSTRAINT; Schema: food; Owner: postgres
--

ALTER TABLE ONLY food.item
    ADD CONSTRAINT fk_order FOREIGN KEY (order_id) REFERENCES food."order"(id);


--
-- Name: food fk_type; Type: FK CONSTRAINT; Schema: food; Owner: postgres
--

ALTER TABLE ONLY food.food
    ADD CONSTRAINT fk_type FOREIGN KEY (food_type) REFERENCES food.food_type(food_type);


--
-- Name: order fk_user; Type: FK CONSTRAINT; Schema: food; Owner: postgres
--

ALTER TABLE ONLY food."order"
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES food."user"(id);


--
-- PostgreSQL database dump complete
--

