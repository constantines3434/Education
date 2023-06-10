--CREATE VIEW v_staff_count AS
SELECT Destination.DepartmentID, Destination.Code_job_title, COUNT(DISTINCT Destination.EmployeeID)
AS staff_count
FROM Destination
JOIN Employees ON Destination.EmployeeID = Employees.EmployeeID
GROUP BY Destination.DepartmentID,Destination.Code_job_title ,Destination.Code_destination;
--код департамента, код работы, сколько сотрудников
--работники и назначения


