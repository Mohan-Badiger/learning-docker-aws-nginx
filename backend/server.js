const express = require('express');
const cors = require('cors');
const PORT = 5000;

const apiRoutes = require('./routes/api');

const app = express();

app.use(cors())
app.use(express.json())

app.use('/api', apiRoutes)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});