const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const exampleRoutes = require('./routes/notedRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', exampleRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
