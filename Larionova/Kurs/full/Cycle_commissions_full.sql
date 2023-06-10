USE Base
DROP TABLE Cycle_commissions;
DROP TABLE Chairman_pck;
DROP TABLE Teacher;
DROP TABLE Speciality;

CREATE TABLE Cycle_commissions
(
	id_cycle_commission INT PRIMARY KEY,
    id_chairman_pck int,
    id_teacher int,
    code_speciality nvarchar(100)
);
INSERT INTO Cycle_commissions (id_cycle_commission, id_chairman_pck, id_teacher, code_speciality)
VALUES ('1', '1', '1', '09.02.06'),
('2', '2', '2', '09.02.07'),
('3', '3', '3', '10.02.05'),
('4', '4', '4', '21.02.19'),
('5', '5', '5', '42.02.01');