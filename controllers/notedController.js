const connection = require('../db/connection');

exports.getNoted = (req, res) => {
  const query = 'SELECT * FROM notes';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching Noted:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
};

exports.PostNoted = (req, res) => {
  const { title, datetime, note } = req.body;

  const query = 'INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)';
  const values = [title, datetime, note];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error creating example:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ id: results.insertId, title });
  });
};
