USE Base
DROP TABLE Semesters;
CREATE TABLE Semesters
(
	nom_semester INT PRIMARY KEY,
    academic_year DATE
);
INSERT INTO Semesters (nom_semester, academic_year)
VALUES ('1', '01.01.2020'),
('2', '05.05.2020'),
('3', '01.01.2021'),
('4', '05.05.2021'),
('5', '01.01.2022');