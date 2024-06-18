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
  const { title, note } = req.body;

  const datetime = new Date().toISOString().slice(0, 19).replace('T', ' ');

  const query = 'INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)';
  const values = [title, datetime, note];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error creating note:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ id: results.insertId, title, datetime, note });
  });
};






exports.GetId = (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  connection.query('SELECT * FROM notes WHERE id = ?', [id], (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      return res.status(500).json({ error: 'Database query error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Data not found' });
    }

    return res.status(200).json(results[0]);
  });
}

exports.Delete = (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM notes WHERE id = ?';
  
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      return res.status(500).json({ error: 'Database query error' });
    }
    
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Data not found' });
    }
    
    return res.status(200).json({ message: 'Data deleted successfully' });
  });
};


exports.Update = (req, res) => {
  const { id } = req.params;
  const { title, datetime, note } = req.body;

  const query = 'UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?';
  const values = [title, datetime, note, id];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      return res.status(500).json({ error: 'Database query error perhatikan Format tanggal dan waktu pada datetime' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Data not found' });
    }

    return res.status(200).json({ message: 'Data updated successfully' });
  });
  
};

