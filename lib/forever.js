const forever = function (callback, interval) {
  if (typeof interval === "undefined") {
    while (true) {
      callback();
    }
  } else {
    setInterval(() => {
      callback();
    }, interval);
  }
};
module.exports = forever 

