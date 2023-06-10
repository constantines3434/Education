USE Base
--DELETE FROM Teacher;
INSERT INTO Teacher (id_teacher, surname, name_, patronymic)
VALUES ('1', '�������', '����������', '���������'),
('2', '���������', '�����', '�����������'),
('3', '�������', '��������', '����������'),
('4', '�������', '���������', '��������'),
('5', '�����������', '�����', '����������');

USE Base
--DROP TABLE Chairman_pck;
INSERT INTO Chairman_pck (id_chairman_pck, surname, name_, patronymic)
VALUES ('1', '�����', '����������', '���������'),
('2', '���������', '�����', '�����������'),
('3', '�������', '��������', '����������'),
('4', '�������', '���������', '��������'),
('5', '�����������', '�����', '����������');

USE Base
--DELETE FROM Speciality;
INSERT INTO Speciality (code_speciality, name_of_speciality)
VALUES ('09.02.06', '������� � ��������� �����������������'),
('09.02.07', '�������������� ������� � ����������������'),
('10.02.05', '����������� �������������� ������������ ������������������ ������'),
('21.02.19', '���������������'),
('42.02.01', '�������');

USE Base
--DELETE FROM Cycle_commissions;
INSERT INTO Cycle_commissions (id_cycle_commission, id_chairman_pck, id_teacher, code_speciality)
VALUES ('1', '1', '1', '09.02.06'),
('2', '2', '2', '09.02.07'),
('3', '3', '3', '10.02.05'),
('4', '4', '4', '21.02.19'),
('5', '5', '5', '42.02.01');

USE Base
--DELETE FROM Protocols;
INSERT INTO Protocols (nom_protocol, date_protocol, id_cycle_commission)
VALUES ('1', '02.02.2023', '1'),
('2', '03.03.2023', '2'),
('3', '04.04.2023', '3'),
('4', '05.05.2023', '4'),
('5', '06.06.2023', '5');

USE Base
--DELETE FROM Semesters;
INSERT INTO Semesters (nom_semester, academic_year)
VALUES ('1', '01.01.2020'),
('2', '05.05.2020'),
('3', '01.01.2021'),
('4', '05.05.2021'),
('5', '01.01.2022');

USE Base
--DELETE FROM Disciplines;
INSERT INTO Disciplines (id_discipline, name_discipline)
VALUES ('��.01.', '������������ �������'),
('��.10.', '�������������� �������������'),
('���.02.01.', '�������������������� ������� � ����'),
('���.02.02.', ' ���������� ���������� � ������ ��� ������'),
('����.03.', '����������� ����');

USE Base
--DELETE FROM Kurs;
INSERT INTO Kurs (nom_kurs)
VALUES ('1'),
('2'),
('3'),
('4'),
('5');

USE Base
--DELETE FROM Komplect_tickets;
INSERT INTO Komplect_tickets (nom_komplect, nom_kurs, nom_semester, nom_protocol, id_discipline)
VALUES ('1', '1', '1', '1', '���.02.01.'),
('2', '2', '2', '2', '���.02.02.'),
('3', '3', '3', '3', '����.03.'),
('4', '4', '4', '4', '��.01.'),
('5', '5', '5', '5', '��.10.');

USE Base
--DELETE FROM Questions;
INSERT INTO Questions (id_question, id_discipline, question, type_question)
VALUES ('1', '���.02.01.', '��� ����� ���� ��������', '������������� ������'),
('2', '���.02.02.', '������� ����� � ������� � 4 ��������', '������������ ������'),
('3', '����.03.', '�������� ��������� ������������� ����', '������������ ������'),
('4', '��.01.', '�������� ����', '������������ ������'),
('5', '��.10.', '������ ������: 2+2', '������������ ������');

USE Base
--DELETE FROM Tickets;
INSERT INTO Tickets (id_ticket, nom_quetion_in_ticket, id_question, nom_komplect)
VALUES ('1', '1', '1', '1'),
('2', '2', '2', '2'),
('3', '3', '3', '3'),
('4', '4', '4', '4'),
('5', '5', '5', '5');

USE Base
--DELETE FROM Users;
INSERT INTO Users (nom_user, name_, login_, password_, role_)
VALUES ('1', 'Constantine', 'Consta', '34', 'User'),
('2', 'Anatoliy', 'Nohcha', '11','User'),
('3', 'Glusker', 'Alex', '12','Admin'),
('4', 'Larionova', 'Elena', '13','Admin'),
('5', 'Anton', 'Parampampam', '14','User');