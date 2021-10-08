const express = require("express");

const app = express();

const server = require("http").Server(app);

const io = require("socket.io")(server);

let users = [];

const port = 3001;

app.get("/", (req, res) => {
  res.send("hellow world");
});

const addUser = (userName, roomId) => {
  users.push({
    userName: userName,
    roomId: roomId,
  });
};

const getRoomUser = (roomId) => {
  return users.find((user) => user.roomId === roomId);
};

const userLeave = (userName) => {
  users = users.filter((user) => user.userName != userName);
};

io.on("connection", (socket) => {
  console.log("someone connected");
  socket.on("join-room", ({ roomId, userName }) => {
    console.log("User joined meeting");
    console.log("roomId");
    console.log("userName");
    socket.join(roomId);
    addUser(userName, roomId);
    socket.to(roomId).emit("user-connected", userName);
    io.to(roomId).emit("all-users", getRoomUser(roomId));
    socket.on("disconnect", () => {
      console.log("disconnected");
      socket.leave(roomId);
      userLeave(userName);
      io.to(roomId).emit("all-users", getRoomUser(roomId));
    });
  });
});

server.listen(port, () => {
  console.log(`api listen port: 3001`);
});
