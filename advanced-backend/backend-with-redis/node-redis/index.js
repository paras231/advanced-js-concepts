// import { createClient } from 'redis';

// const client = await createClient()
//   .on('error', err => console.log('Redis Client Error', err))
//   .connect();

// await client.set('key', 'value');
// const value = await client.get('key');
// console.log(value);

// client.on

// await client.disconnect();

//  create a pub sub notification system using redis

import redis from "redis";

// publisher

const publisher = redis.createClient();

await publisher.connect();

const article = {
  id: "123456",
  name: "Using Redis Pub/Sub with Node.js",
  blog: "Logrocket Blog",
};

async function publishMessage() {
  await publisher.publish("article", JSON.stringify(article));
}

// subscriber
const subscriber = redis.createClient();

await subscriber.connect();

// Handle connection errors
publisher.on("error", (err) => {
  console.error("Publisher error:", err);
});

subscriber.on("error", (err) => {
  console.error("Subscriber error:", err);
});

await subscriber.subscribe("article", (message) => {
  console.log(message); // 'message'
});

setInterval(() => publishMessage(), 2000);
