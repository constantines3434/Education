USE Base
DROP TABLE Speciality;
(
	code_speciality nvarchar(20) PRIMARY KEY,
    name_of_speciality nvarchar(100)
);
INSERT INTO Speciality (code_speciality, name_of_speciality)
VALUES ('09.02.06', '������� � ��������� �����������������'),
('09.02.07', '�������������� ������� � ����������������'),
('10.02.05', '����������� �������������� ������������ ������������������ ������'),
('21.02.19', '���������������'),
('42.02.01', '�������');