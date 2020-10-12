const express = require('express');
const app = express();
const port = 3030;

app.use(express.static('dist'))


app.listen(port, () => {
  console.log('Launched, listening on port ' + port)
})