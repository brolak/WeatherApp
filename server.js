const path = require('path');
const express = require('express');
// const compression = require('compression');
const app = express();

app.set('port', (process.env.PORT || 3000));

// app.use(compression());
app.use('/build/', express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

const server = app.listen(app.get('port'), function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Server started at http://localhost:%s', port);
});
