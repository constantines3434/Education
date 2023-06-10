USE Base
DROP TABLE Users;
CREATE TABLE Users
(
	nom_user INT PRIMARY KEY,
    name_ nvarchar(100),
    login_ nvarchar(100),
    password_ nvarchar(100),
	role_ nvarchar(100)
);
INSERT INTO Users (nom_user, name_, login_, password_, role_)
VALUES ('1', 'Constantine', 'Consta', '34', 'User'),
('2', 'Anatoliy', 'Nohcha', '11','User'),
('3', 'Glusker', 'Alex', '12','Admin'),
('4', 'Larionova', 'Elena', '13','Admin'),
('5', 'Anton', 'Parampampam', '14','User');