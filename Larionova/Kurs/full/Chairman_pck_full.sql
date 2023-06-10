USE Base
CREATE TABLE Chairman_pck
(
	id_chairman_pck INT PRIMARY KEY,
    name_ nvarchar(20),
    surname nvarchar(20),
    patronymic nvarchar(20)
);
INSERT INTO Chairman_pck (id_chairman_pck, surname, name_, patronymic)
VALUES ('1', 'Смирнов', 'Константин', 'Вадимович'),
('2', 'Ларионова', 'Елена', 'Анатольевна'),
('3', 'Мурашов', 'Анатолий', 'Алексеевич'),
('4', 'Глускер', 'Александр', 'Игоревич'),
('5', 'Александров', 'Роман', 'Викторович');