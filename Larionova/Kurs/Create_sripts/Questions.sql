USE Base
CREATE TABLE Questions
(
	id_question INT PRIMARY KEY,
    id_discipline nvarchar(100),
    question nvarchar(100),
    type_question nvarchar(100)
);