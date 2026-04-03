const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const allow = require("../middleware/roleMiddleware");
const { getSummary } = require("../controllers/dashboardController");

router.get("/", auth, allow("ADMIN", "ANALYST", "VIEWER"), getSummary);

module.exports = router;