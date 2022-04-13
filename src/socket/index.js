module.exports = function (socket) {
  socketIo.on("connection", function (socket) {
    console.log("socket connection succeeded");

    socket.on("disconnect", (reason) => {
      console.log(`disconnect:${reason}`);
    });
  });
};
