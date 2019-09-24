import path from 'path';
import gateway from 'express-gateway';

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
