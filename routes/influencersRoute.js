const express = require("express");
const {
  getAllInfluencerController,
  registerInfluencerController,
  loginInfluencerController,
  updateInfluencerController,
  deleteInfluencerController,
  logoutInfluencerController
} = require("../controllers/influencerController");

//router object
const router = express.Router();

//GET ALL INFLUENCERS || GET
router.get("/all-influencers", getAllInfluencerController);

//CREATE INFLUENCER || POST
router.post("/signup", registerInfluencerController);

//LOGIN INFLUENCER || POST
router.post("/login-influencer", loginInfluencerController);

router.get("/logout", logoutInfluencerController);

//UPDATE INFLUENCER || UPDATE
router.put("/update-influencer/:id", updateInfluencerController);

//DELETE INFLUENCER || DELETE
router.delete("/delete-influencer/:id", deleteInfluencerController);

module.exports = router;
