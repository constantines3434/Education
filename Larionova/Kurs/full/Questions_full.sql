USE Base
DROP TABLE Questions;
CREATE TABLE Questions
(
	id_question INT PRIMARY KEY,
    id_discipline nvarchar(100),
    question nvarchar(100),
    type_question nvarchar(100)
);
INSERT INTO Questions (id_question, id_discipline, question, type_question)
VALUES ('1', '���.02.01.', '��� ����� ���� ��������', '������������� ������'),
('2', '���.02.02.', '������� ����� � ������� � 4 ��������', '������������ ������'),
('3', '����.03.', '�������� ��������� ������������� ����', '������������ ������'),
('4', '��.01.', '�������� ����', '������������ ������'),
('5', '��.10.', '������ ������: 2+2', '������������ ������');