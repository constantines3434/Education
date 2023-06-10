USE Base
DROP TABLE Tickets;
DROP TABLE Komplect_tickets;
DROP TABLE Questions;
CREATE TABLE Tickets
(
    id_ticket INT PRIMARY KEY,
    nom_quetion_in_ticket INT,
    id_question INT,
    nom_komplect INT
	UNIQUE(id_ticket, nom_quetion_in_ticket)
);
INSERT INTO Tickets (id_ticket, nom_quetion_in_ticket, id_question, nom_komplect)
VALUES ('1', '1', '1', '1'),
('2', '2', '2', '2'),
('3', '3', '3', '3'),
('4', '4', '4', '4'),
('5', '5', '5', '5');