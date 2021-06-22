SELECT COUNT(assistance_requests.*) AS total_assistances, name
  FROM teachers
  INNER JOIN assistance_requests ON teacher_id=teachers.id
  WHERE name='Waylon Boehm'
  GROUP BY name;