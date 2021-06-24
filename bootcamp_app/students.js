const { Pool } = require('pg');

// psql -h localhost -U vagrant bootcampx

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// pool.query(`
//   SELECT id, name, cohort_id
//   FROM students
//   LIMIT 5;
//   `)
//   .then(res => {
//     console.log(res.rows);
//   })
//   .catch(err => console.error('query error', err.stack));

const cohort_name = process.argv[2];
const max_result = process.argv[3] || 5;
const values = [`%${cohort_name}%`, max_result];

const queryString = `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;
pool.query(queryString, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.error('query error', err.stack));
