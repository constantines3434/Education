SELECT States.DepartmentID, States.Code_job_title, States.Count_of_people
FROM States
INNER JOIN Departments
ON States.DepartmentID = Departments.DepartmentID
INNER JOIN Job_title
ON States.Code_job_title = Job_title.Code_job_title
Order By States.Count_of_people
--штат vs департмент и job