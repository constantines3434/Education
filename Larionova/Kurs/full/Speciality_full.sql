USE Base
DROP TABLE Speciality;
(
	code_speciality nvarchar(20) PRIMARY KEY,
    name_of_speciality nvarchar(100)
);
INSERT INTO Speciality (code_speciality, name_of_speciality)
VALUES ('09.02.06', 'Сетевое и системной администрирование'),
('09.02.07', 'Информационные системы и программирование'),
('10.02.05', 'Обеспечение информационной безопасности автоматизированных систем'),
('21.02.19', 'Землеустройство'),
('42.02.01', 'Реклама');