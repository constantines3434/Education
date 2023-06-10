USE Base
DROP TABLE Protocols;
DROP TABLE Cycle_commissions;
CREATE TABLE Protocols
(
	nom_protocol INT PRIMARY KEY,
    date_protocol date,
    nom_cycle_comm INT
);
INSERT INTO Protocols (nom_protocol, date_protocol, nom_cycle_comm)
VALUES ('1', '02.02.2023', '1'),
('2', '03.03.2023', '2'),
('3', '04.04.2023', '3'),
('4', '05.05.2023', '4'),
('5', '06.06.2023', '5');