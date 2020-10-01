import express from 'express';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(renderer());
});

app.listen(7777, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on PORT 7777');
});
