USE Base
DROP TABLE Teacher;
CREATE TABLE Teacher
(
	id_teacher INT PRIMARY KEY,
    surname nvarchar(100),
	name_ nvarchar(100),
    patronymic nvarchar(100)
);
INSERT INTO Teacher (id_teacher, surname, name_, patronymic)
VALUES ('1', '�������', '����������', '���������'),
('2', '���������', '�����', '�����������'),
('3', '�������', '��������', '����������'),
('4', '�������', '���������', '��������'),
('5', '�����������', '�����', '����������');