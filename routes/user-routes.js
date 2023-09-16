// Import the Express router
const express = require("express");
const router = express?.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
];
// Define a GET route
router.get("/:uid", (req, res, next) => {
  const userId = req.params.uid; // { uid: 'p1' }
  const user = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });
  res.json({ user }); // => { user } => { user: user }
});

// Export the router
module.exports = router;
