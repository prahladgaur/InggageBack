const express = require("express");
const {
  getAllBrandController,
  registerBrandController,
  loginBrandController,
  updateBrandController,
  deleteBrandController,
} = require("../controllers/brandController");

//router object
const router = express.Router();

//GET ALL BrandS || GET
router.get("/all-brands", getAllBrandController);

//CREATE Brand || POST
router.post("/register-brand", registerBrandController);

//LOGIN Brand || POST
router.post("/login-brand", loginBrandController);

//UPDATE Brand || UPDATE
router.put("/update-brand/:id", updateBrandController);

//DELETE Brand || DELETE
router.delete("/delete-brand/:id", deleteBrandController);

module.exports = router;
