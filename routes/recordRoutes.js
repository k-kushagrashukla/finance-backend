const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const allow = require("../middleware/roleMiddleware");

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require("../controllers/recordController");

router.post("/", auth, allow("ADMIN"), createRecord);
router.get("/", auth, allow("ADMIN", "ANALYST"), getRecords);
router.put("/:id", auth, allow("ADMIN"), updateRecord);
router.delete("/:id", auth, allow("ADMIN"), deleteRecord);

module.exports = router;