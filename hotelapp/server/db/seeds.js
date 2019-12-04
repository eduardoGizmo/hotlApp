
use hotel;
db.dropDatabase();


db.guests.insertMany([
    {
      name: "John Joe",
      email: "johnjoe@gmail.com",
      checkin: "false"
    }

]);
