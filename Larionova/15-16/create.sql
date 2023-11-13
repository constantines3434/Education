USE master;
IF EXISTS (SELECT * FROM SYS.DATABASES WHERE NAME = 'PR15_16')
	DROP DATABASE PR15_16 
GO  
CREATE DATABASE PR15_16
ON   
( NAME = PR15_16_data,  
    FILENAME = 'C:\VS Projects\Commit\Kursach\Create_base_script\All\PR15-16.mdf',  
    SIZE = 8,  
    MAXSIZE = 100,  
    FILEGROWTH = 10 )  
LOG ON  
( NAME = PR15_16_log,  
    FILENAME = 'C:\VS Projects\Commit\Kursach\Create_base_script\All\PR15-16.ldf',  
    SIZE = 5MB,  
    MAXSIZE = 25MB,  
    FILEGROWTH = 5MB );  
GO  
USE PR15_16;
IF EXISTS (SELECT * FROM SYSOBJECTS WHERE NAME = 'Employees')
	DROP TABLE Employees
IF EXISTS (SELECT * FROM SYSOBJECTS WHERE NAME = 'Departments')
	DROP TABLE Departments
IF EXISTS (SELECT * FROM SYSOBJECTS WHERE NAME = 'Job_title')
	DROP TABLE Job_title
IF EXISTS (SELECT * FROM SYSOBJECTS WHERE NAME = 'States')
	DROP TABLE States
IF EXISTS (SELECT * FROM SYSOBJECTS WHERE NAME = 'Destination')
	DROP TABLE Destination
CREATE TABLE Employees (
    EmployeeID int IDENTITY PRIMARY KEY,
    Surname varchar(50),
    Name_ varchar(50),
    Patronymic varchar(50),
	Gender char(1),
    DateOfBirth date,
	PhoneNumber varchar(15),
    Education varchar(50)
);
INSERT INTO Employees (Surname, Name_, Patronymic, Gender,
DateOfBirth, PhoneNumber, Education)
VALUES ('������','�������', '�������������','�',
'1990-03-01', '3955889', '������'),
('�������','�������', '������','�',
'1960-06-12', '2356789', '������'),
('������','�������', '������','�',
'1985-09-20', '4231112', '������'),
('��������','�����', '����������','�',
'1960-06-12', '2357890', '������'),
('������','����', '��������','�',
'1960-02-17', '2354678', '������');

CREATE TABLE Departments (
    DepartmentID int PRIMARY KEY,
    DepartmentName varchar(100)
);
INSERT INTO Departments (DepartmentID, DepartmentName)
VALUES (1,'���������������-�������������� ��������'),
(2,'�����������'),
(3,'����� ������'),
(4,'������� �����'),
(5,'���� ��������������');
CREATE TABLE Job_title (
    Code_job_title int PRIMARY KEY,
    name_job_title varchar(100)
);
INSERT INTO Job_title (Code_job_title, name_job_title)
VALUES (1,'��������'),
(2,'��� ��� �� �� ������'),
(3,'��� ��� �� ���  ��� '),
(4,'�� ���'),
(5,'���');
CREATE TABLE States (
	DepartmentID int,
	Code_job_title int,
    Count_of_people int,
	primary key (DepartmentID, Code_job_title),
	FOREIGN KEY (DepartmentID) REFERENCES Departments (DepartmentID)
	ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (Code_job_title) REFERENCES Job_title (Code_job_title)
	ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO States (DepartmentID, Code_job_title, Count_of_people)
VALUES (1, 1, 10),
(2, 2, 20),
(3, 3, 30),
(4, 4, 40),
(5, 5, 50);
CREATE TABLE Destination (
    Code_destination int IDENTITY PRIMARY KEY,
    EmployeeID int,
	DateOfAdmission date,
    DateOfDismissal date,
	Statute varchar(50),
	DepartmentID int,
    Code_job_title int,
	FOREIGN KEY (DepartmentID, Code_job_title) REFERENCES States (DepartmentID, Code_job_title)
	ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
	ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO Destination(EmployeeID, DateOfAdmission, DateOfDismissal,
Statute, DepartmentID, Code_job_title)
VALUES (1, '2002-05-30', NULL, '��������',1, 1),
(2, '2007-11-26', NULL, '��������',2, 2),
(3, '2003-02-17', NULL, '��������',3, 3),
(4, '2003-02-18', '2019-02-19', '������',4, 4),
(5, '2003-02-18', NULL, '��������',5, 5);