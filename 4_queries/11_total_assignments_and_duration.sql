SELECT
  assignments.day AS day,
  COUNT(assignments.chapter) AS number_of_assignments,
  SUM(assignments.duration) AS duration
FROM assignments
GROUP BY assignments.day
ORDER BY day;