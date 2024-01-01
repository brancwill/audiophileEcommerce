CREATE TABLE Products(
    id INT PRIMARY KEY,
    slug VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    shortenedName VARCHAR(255) NOT NULL,
    image JSON NOT NULL,
    category VARCHAR(255) NOT NULL,
    categoryImage JSON NOT NULL,
    new BOOLEAN NOT NULL,
    price INT NOT NULL,
    description TEXT NOT NULL,
    features TEXT NOT NULL,
    includes JSON NOT NULL,
    gallery JSON NOT NULL,
    others JSON NOT NULL
);
