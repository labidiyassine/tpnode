const express = require('express');
const app = express();
const port = 3000;

app.get('/auth/login', (req, res) => {
    res.json({status: 200, message: '<h1>server working fine</h1>'});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.get('/auth/register', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
const data = [
    { id: 1, name: 'yassine', value: 'king' },
    { id: 2, name: 'hamza', value: 'ntas' },
    { id: 3, name: 'tag', value: 'ok' },
  ];
  app.get('/post/all', (req, res) => {
    res.json(data);
  });
  
  app.get('/post/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const obj = data.find(o => o.id === id);
  
    if (obj) {
      res.json(obj);
    } else {
      res.status(404).json({ message: 'Object not found' });
    }
  });

