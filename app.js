import express from 'express';
import homePageTemplate from './views/index.js';
import listTemplate from './views/list.js';
import dashTemplate from './views/dash.js';

import DASHES_DATA from './data/data.js';
import editTemplate from './views/edit.js';

const app = express();
app.use(express.urlencoded({ extended: false }));

// app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(homePageTemplate());
});

app.get('/dashes', (req, res) => {
  res.send(listTemplate(DASHES_DATA));
});

app.post('/dashes', (req, res) => {
  const { content } = req.body;
  const id = Math.random().toString();

  DASHES_DATA.push({ id, content });

  res.redirect(`/dashes/${id}`);
});

app.post('/dashes/search', (req, res) => {
  const text = req.body.search.toLowerCase();

  const dashes = DASHES_DATA.filter((d) =>
    d.content.toLowerCase().includes(text)
  );

  res.send(listTemplate(dashes));
});

app.get('/dashes/:id', (req, res) => {
  const { id } = req.params;
  const dash = DASHES_DATA.find((b) => b.id == id);

  res.send(dashTemplate(dash));
});

app.get('/dashes/edit/:id', (req, res) => {
  const { id } = req.params;
  const dash = DASHES_DATA.find((b) => b.id == id);

  res.send(editTemplate(dash));
});

app.delete('/dashes/:id', (req, res) => {
  const { id } = req.params;
  const idx = DASHES_DATA.findIndex((b) => b.id == id);
  DASHES_DATA.splice(idx, 1);

  res.send();
});

app.put('/dashes/:id', (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  const newDash = { id, content };
  const idx = DASHES_DATA.findIndex((b) => b.id == id);
  DASHES_DATA[idx] = newDash;

  res.send(dashTemplate(newDash));
});

app.listen(3000, () => {
  console.log('App listing on port 3000');
});
