import { z } from "zod";

const createGroupSchema = z.object({
  name : z.string({
    required_error : "Group name is required",
    invalid_type_error : "Group name must be a string",
  }),
  color : z.string({
    required_error : "Group color is required",
    invalid_type_error : "Group color must be a string",
  })
});

const updateGroupSchema = z.object({
  name : z.string({
    invalid_type_error : " name must be a string"
  }).optional(),
  color : z.string({ 
    invalid_type_error : " color must be a string"
  }).optional()
});


export{
  createGroupSchema,
  updateGroupSchema
}

