USE Base
CREATE TABLE Tickets
(
    id_ticket INT PRIMARY KEY,
    nom_quetion_in_ticket INT,
    id_question INT,
    nom_komplect INT
	UNIQUE(id_ticket, nom_quetion_in_ticket)
);