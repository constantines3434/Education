USE Base
CREATE TABLE Chairman_pck
(
	id_chairman_pck INT PRIMARY KEY,
    name_ nvarchar(20),
    surname nvarchar(20),
    patronymic nvarchar(20)
);
INSERT INTO Chairman_pck (id_chairman_pck, surname, name_, patronymic)
VALUES ('1', '�������', '����������', '���������'),
('2', '���������', '�����', '�����������'),
('3', '�������', '��������', '����������'),
('4', '�������', '���������', '��������'),
('5', '�����������', '�����', '����������');