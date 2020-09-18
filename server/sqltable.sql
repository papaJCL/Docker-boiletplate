create database login;

create table users (
	user_id serial not null primary key,
	user_name VARCHAR(255) NOT NULL,
  	user_email VARCHAR(255) NOT NULL UNIQUE,
  	user_password VARCHAR(255) NOT NULL
);

INSERT INTO users (user_name, user_email, user_password) VALUES ('fake', 'fake@gmail.com', 'fake');


