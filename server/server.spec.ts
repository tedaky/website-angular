import { app } from './server';

describe('loading express', function() {
  let server;
  beforeEach(() => {
    server = app;
  });
  afterEach((done) => {
    done();
  });
});
