import { Router } from "express";
import { createTask, viewTask } from "../controller/todoController";

const router: Router = Router()

router.route("/create-task").post(createTask)
router.route("/view-task").get(viewTask)

export default router