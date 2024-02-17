const { Router } = require("express");
const taskController = require("../controllers/taskController");

const router = Router();

router.get("/todolist/:user", taskController.get_task);
router.post("/task/add/", taskController.add_task);
router.delete("/task/delete/", taskController.delete_task);

module.exports = router;
