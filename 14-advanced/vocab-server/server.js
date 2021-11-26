const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.listen(port);

app.get('/', (req, res) => {
  res.send('Hello World');
});

console.log(`Server started on http://localhost:${ port }`);
  
