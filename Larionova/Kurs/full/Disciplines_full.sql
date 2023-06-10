USE Base
DROP TABLE Disciplines;
CREATE TABLE Disciplines
(
	id_discipline nvarchar(100) PRIMARY KEY,
    name_discipline nvarchar(100)
);

INSERT INTO Disciplines (id_discipline, name_discipline)
VALUES ('ОП.01.', 'Операционные системы'),
('ОП.10.', 'Математическое моделирование'),
('МДК.02.01.', 'Инфокоммуникационные системы и сети'),
('МДК.02.02.', ' Технология разработки и защиты баз данных'),
('ОГСЭ.03.', 'Иностранный язык');