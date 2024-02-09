const { Router } = require("express");
const taskController = require("../controllers/taskController");

const router = Router();

router.get("/todolist", taskController.get_task);
router.post("/task/add/", taskController.add_task);
router.get("/task/edit/:id", taskController.add_task);
router.put("/task/update/:id", taskController.add_task);
router.delete("/task/delete/:id", taskController.add_task);

module.exports = router;
