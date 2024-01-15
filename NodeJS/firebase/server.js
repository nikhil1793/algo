const express = require("express");
const port = process.env.PORT || 9000;
const app = express();
app.use(express.urlencoded());
app.use(express.json());
const cors = require("cors");
app.use(cors());

const webpush = require("web-push");

const vapidKeys = {
  publicKey: "BNUBx0ebWIm4UqvZ2_lMHwQnXVnzFy1nTDy98ROo6BVjhUWsxrXzvNM7D7kQqb-086NkYV2U5XZMvRtIgqdPvWg",
  privateKey: "tyfLdmzCz6IFKeNavldZWbAssNMJZ8zNTgS-H9QvIzk",
};

webpush.setVapidDetails("mailto:example@yourdomain.org", vapidKeys.publicKey, vapidKeys.privateKey);

var serviceAccount = require("./serviceAccountKey.json");
var admin = require("firebase-admin");
var rAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = rAdmin.firestore();
let collection = db.collection("notifications");

app.route("/api/notifications").post(async (req, res) => {
  const sub = req.body;
  let docRef = collection.doc("subscriptions");
  let val = await docRef.get();
  let subs = val.data().data || [];
  await docRef.set({
    data: [...subs, sub],
  });
  console.log("Received Subscription on the server: ", sub);
  res.status(200).json({ message: "Subscription added successfully." });
});

app.route("/api/notify").post(async (req, res) => {
  const notificationPayload = {
    notification: {
      title: "Notify!!!!",
      body: "Notification from Server!!!",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1,
      },
      actions: [
        {
          action: "explore",
          title: "Go to the site",
        },
      ],
    },
  };

  let docRef = collection.doc("subscriptions");
  let val = await docRef.get();
  let subs = val.data().data || [];

  Promise.all(subs.map((sub) => webpush.sendNotification(sub, JSON.stringify(notificationPayload))))
    .then(() => res.status(200).json({ message: "Newsletter sent successfully." }))
    .catch((err) => {
      console.error("Error sending notification, reason: ", err);
      res.sendStatus(500);
    });
});

app.listen(port, (req, res) => {
  console.info(`Running on ${port}`);
});
