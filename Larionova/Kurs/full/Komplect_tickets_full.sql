USE Base
DROP TABLE Komplect_tickets;
DROP TABLE Semesters;
DROP TABLE Protocols;
DROP TABLE Disciplines;
DROP TABLE Kurs;
CREATE TABLE Komplect_tickets
(
    nom_komplect INT PRIMARY KEY,
    nom_kurs INT,
    nom_semester INT,
    nom_protocol INT,
	id_discipline nvarchar(100)
);
INSERT INTO Komplect_tickets (nom_komplect, nom_kurs, nom_semester, nom_protocol, id_discipline)
VALUES ('1', '1', '1', '1', '���.02.01.'),
('2', '2', '2', '2', '���.02.02.'),
('3', '3', '3', '3', '����.03.'),
('4', '4', '4', '4', '��.01.'),
('5', '5', '5', '5', '��.10.');