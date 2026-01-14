const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const { nanoid } = require("nanoid");

const app = express();
app.use(cors({ origin: "*" }));

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const rooms = new Map();

const QUESTIONS = [
  {
    id: "q1",
    prompt: "Time complexity of binary search?",
    choices: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answerIndex: 1,
  },
  {
    id: "q2",
    prompt: "2^5 = ?",
    choices: ["10", "16", "32", "64"],
    answerIndex: 2,
  },
  {
    id: "q3",
    prompt: "Which data structure is used in BFS?",
    choices: ["Stack", "Queue", "Heap", "Tree"],
    answerIndex: 1,
  },
];

io.on("connection", (socket) => {
  socket.on("create-room", ({ name }, cb) => {
    const roomId = nanoid(6).toUpperCase();
    rooms.set(roomId, {
      players: [{ id: socket.id, name, score: 0, idx: 0 }],
    });
    socket.join(roomId);
    cb(roomId);
  });

  socket.on("join-room", ({ roomId, name }, cb) => {
    const room = rooms.get(roomId);
    if (!room || room.players.length === 2) return;
    room.players.push({ id: socket.id, name, score: 0, idx: 0 });
    socket.join(roomId);
    io.to(roomId).emit("start", QUESTIONS);
    cb();
  });

  socket.on("answer", ({ roomId, choice }, cb) => {
    const room = rooms.get(roomId);
    const player = room.players.find(p => p.id === socket.id);
    const q = QUESTIONS[player.idx];
    if (choice === q.answerIndex) player.score += 100;
    player.idx += 1;

    if (player.idx === QUESTIONS.length) {
      io.to(roomId).emit("finish", room.players);
    }
    cb();
  });
});

server.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
