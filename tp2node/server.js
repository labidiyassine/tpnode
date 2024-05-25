const express = require('express');
const app = express();
const port = 3001;
const voiture = require('./routes/voiture')
app.use(express.json())
app.use('/voiture',voiture)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});