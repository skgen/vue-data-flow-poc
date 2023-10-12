import { createHttpProvider } from '@patriarche/vue-http';

export const routingHttpProvider = createHttpProvider({
  timeout: 30000,
  baseURL: 'http://localhost:1337',
  headers: {
    accept: 'application/json',
  },
}, {
  main: true,
});
