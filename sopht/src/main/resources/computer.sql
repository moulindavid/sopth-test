-- Use migration tools

DROP TABLE IF EXISTS computers;

-- Create the computers table
CREATE TABLE computers
(
    id                 UUID PRIMARY KEY,
    computer_name      VARCHAR(255),
    bought_date        DATE,
    bought_price        FLOAT,
    annual_consumption FLOAT
);