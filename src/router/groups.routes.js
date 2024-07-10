import { Router } from "express";
import { createGroupSchema, updateGroupSchema } from "../schemas/group.schema.js";
import { createGroup, getGroups, updateGroup,deleteGroup} from "../controllers/groups.controller.js";
import validateSchema from "../middlewares/validateSchema.js";

const  router = Router();



router.get("/", getGroups);

router.post("/", validateSchema(createGroupSchema), createGroup);

router.put("/:id",validateSchema(updateGroupSchema), updateGroup);

router.delete("/:id", deleteGroup);


export default router;