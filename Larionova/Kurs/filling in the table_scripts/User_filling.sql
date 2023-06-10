USE Base
DELETE FROM Users;
INSERT INTO Users (nom_user, name_, login_, password_, role_)
VALUES ('1', 'Constantine', 'Consta', '34', 'User'),
('2', 'Anatoliy', 'Nohcha', '11','User'),
('3', 'Glusker', 'Alex', '12','Admin'),
('4', 'Larionova', 'Elena', '13','Admin'),
('5', 'Anton', 'Parampampam', '14','User');