CREATE DATABASE cities;

CREATE TABLE city(
    city_id SERIAL PRIMARY KEY,
    location VARCHAR(155)
);

CREATE TABLE country( 
    country_id SERIAL PRIMARY KEY, 
    location VARCHAR(155) 
);