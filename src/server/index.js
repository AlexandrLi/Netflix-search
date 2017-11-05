import express from 'express';
import handleRender from './handleRender';

const port = 8080;
const server = express();

server.use(express.static('dist'));
server.get('/*', handleRender);

server.listen(port, () => {
  console.info(`Express listening on port ${port}`);
});