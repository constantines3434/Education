USE Base
DROP TABLE Disciplines;
CREATE TABLE Disciplines
(
	id_discipline nvarchar(100) PRIMARY KEY,
    name_discipline nvarchar(100)
);

INSERT INTO Disciplines (id_discipline, name_discipline)
VALUES ('��.01.', '������������ �������'),
('��.10.', '�������������� �������������'),
('���.02.01.', '�������������������� ������� � ����'),
('���.02.02.', ' ���������� ���������� � ������ ��� ������'),
('����.03.', '����������� ����');