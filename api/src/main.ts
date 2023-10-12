import '@/env.js';
import express from 'express';
import cors from 'cors';
import fs from 'node:fs';
import { logApp } from '@/log.js';

logApp();

// function aOf(n: number) {
//   return Array(n).fill(null);
// }

// const groups = aOf(3).reduce((_, i) => ({
//   id: `group-${i}`,
//   users: aOf(3).map((__, j) => ({
//     id: `user-${i}-${j}`,
//   })),
// }));

// function l(o: any) {
//   console.log(JSON.stringify(o, null, 2));
// }

// const groups = (() => {
//   const d: any = {};
//   for (let i = 0; i < 3; i += 1) {
//     // groups
//     d[`group-${i}`] = {
//       id: `group-${i}`,
//       users: [],
//     };
//     for (let j = 0; j < 3; j += 1) {
//       // users
//       d[`group-${i}`].users.push({
//         id: `user-${i}-${j}`,
//       });
//     }
//   }
//   return d;
// })();

// const users = (() => {
//   const d: any = {};
//   for (let i = 0; i < 3; i += 1) {
//     // groups
//     for (let j = 0; j < 3; j += 1) {
//       // users
//       d[`user-${i}-${j}`] = {
//         id: `user-${i}-${j}`,
//         messages: [],
//       };
//       for (let k = 0; k < 3; k += 1) {
//         // messages
//         d[`user-${i}-${j}`].messages.push({
//           id: `message-${i}-${j}-${k}`,
//         });
//       }
//     }
//   }
//   return d;
// })();

// const messages = (() => {
//   const d: any = {};
//   for (let i = 0; i < 3; i += 1) {
//     // groups
//     for (let j = 0; j < 3; j += 1) {
//       // users
//       for (let k = 0; k < 3; k += 1) {
//         // messages
//         d[`message-${i}-${j}-${k}`] = {
//           id: `message-${i}-${j}-${k}`,
//         };
//       }
//     }
//   }
//   return d;
// })();
const groups = JSON.parse(fs.readFileSync('./data/groups.json', { encoding: 'utf-8' })) as [
  {
    id: string;
    name: string;
    location: string;
    users: [ { id: string }];
  },
];
const users = JSON.parse(fs.readFileSync('./data/users.json', { encoding: 'utf-8' }));
const messages = JSON.parse(fs.readFileSync('./data/messages.json', { encoding: 'utf-8' }));

const app = express();

app.use(cors());

const apiDebounce = 200;

app.get('/groups', (req, res) => {
  setTimeout(() => {
    res.json(groups.map((group) => ({
      id: group.id,
      users: group.users,
    })));
  }, apiDebounce);
});

app.get('/users', (req, res) => {
  setTimeout(() => {
    res.json(users);
  }, apiDebounce);
});

app.get('/messages', (req, res) => {
  setTimeout(() => {
    res.json(messages);
  }, apiDebounce);
});

app.get('/groups/:id', (req, res) => {
  setTimeout(() => {
    const group = groups.find((v: any) => v.id === req.params.id);
    if (group) {
      res.json(group);
    }
    res.status(404);
    res.end();
  }, apiDebounce);
});

app.get('/users/:id', (req, res) => {
  setTimeout(() => {
    const user = users.find((v: any) => v.id === req.params.id);
    if (user) {
      res.json(user);
    }
    res.status(404);
    res.end();
  }, apiDebounce);
});

app.get('/messages/:id', (req, res) => {
  setTimeout(() => {
    const message = messages.find((v: any) => v.id === req.params.id);
    if (message) {
      res.json(message);
    }
    res.status(404);
    res.end();
  }, apiDebounce);
});

app.listen(process.env.APP_PORT);
