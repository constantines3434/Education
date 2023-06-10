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
VALUES ('1', 'МДК.02.01.', 'Как зовут Льва Толстого', 'Теоретический вопрос'),
('2', 'МДК.02.02.', 'Сколько яблок в коробке с 4 яблоками', 'Теоретическй вопрос'),
('3', 'ОГСЭ.03.', 'Докажите письменно существование бога', 'Практический вопрос'),
('4', 'ОП.01.', 'Создайте сайт', 'Практический вопрос'),
('5', 'ОП.10.', 'Решите пример: 2+2', 'Практический вопрос');