import { MongoClient } from "https://deno.land/x/mongo/mod.ts";

const client = new MongoClient();
client.connectWithUri("mongodb://localhost:27017");

// get database
const db = client.database("user");
const users = db.collection("users");

// insert
const insertId = await users.insertOne({
  username: "user1",
  password: "pass1",
});

// insertMany
const insertIds = await users.insertMany([
  {
    username: "user1",
    password: "pass1",
  },
  {
    username: "user2",
    password: "pass2",
  },
]);

// findOne
const user1 = await users.findOne({ _id: insertId });
console.log(user1)
// find
const all_users = await users.find({ username: { $ne: null } });
console.log(all_users)
// find by ObjectId
// const user1_id = await users.findOne(
//   { _id: { "$oid": "<oid>" } },
// );

// count
const count = await users.count({ username: { $ne: null } });
console.log(count)
// aggregation
// const docs = await users.aggregate([
//   { $match: { username: "many" } },
//   { $group: { _id: "$username", total: { $sum: 1 } } },
// ]);

// updateOne
// const { matchedCount, modifiedCount, upsertedId } = await users.updateOne(
//   { username: { $ne: null } },
//   { $set: { username: "USERNAME" } },
// );

// updateMany
// const { matchedCount, modifiedCount, upsertedId } = await users.updateMany(
//   { username: { $ne: null } },
//   { $set: { username: "USERNAME" } },
// );

// deleteOne
// const deleteCount = await users.deleteOne({ _id: insertId });

// deleteMany
// const deleteCount2 = await users.deleteMany({ username: "test" });
