const connection = require('../db/connection');

exports.getExamples = (req, res) => {
  const query = 'SELECT * FROM notes';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching examples:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
};

exports.createExample = (req, res) => {
  const { name } = req.body;
  const query = 'INSERT INTO examples (name) VALUES (?)';
  connection.query(query, [name], (err, results) => {
    if (err) {
      console.error('Error creating example:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ id: results.insertId, name });
  });
};
