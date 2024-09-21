const mongoose = require("mongoose");

const Nations = require("./models/nations");

const url = "mongodb://127.0.0.1:27017/football";
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("Connected correctly to server");
  var newNation = Nations({
    name: "Qatar",
  });
  newNation
    .save()
    .then((nation) => {
      console.log(nation);
      return Nations.find({}).exec();
    })
    .then((nations) => {
      console.log(nations);
      return Nations.remove({});
    })
    .catch((err) => {
      console.log(err);
    });

  Nations.create({
    name: "Vietnam",
    description: "Home Team",
  })
    .then((nation) => {
      console.log(nation);
      return Nations.findByIdAndUpdate(
        nation._id,
        {
          $set: { description: "WC 2022" },
        },
        {
          new: true,
        }
      ).exec();
    })
    .then((nation) => {
      console.log(nation);
      nation.commnets.push({
        rating: 5,
        commnet: "Please give me beer!",
        author: "Hacker",
      });
      return nation.save();
    })
    .then((nation) => {
      console.log(nation);
      return Nations.deleteOne({});
    })
    .then(() => {
      return mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
    });
});
