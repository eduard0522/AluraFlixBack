import { z } from "zod";

const createVideoSchema = z.object({
  name: z.string({
    required_error : "name is required",
    invalid_type_error : "name must be a string"
  }),
   
  description: z.string({
    required_error : "Description is required",
    invalid_type_error : "Description must be a string"
  }),
  videoUrl: z.string({
    required_error : "Video URL is required",
    invalid_type_error : "Video URL must be a string"
  }),
  image: z.string({
    required_error : "Image is required",
    invalid_type_error : "Image must be a string"
  }),
  group : z.string({
    required_error : "Group is required",
    invalid_type_error : "Group must be a string"
  })
});


const updateVideoSchema = z.object({
  name: z.string({
    invalid_type_error : "name must be a string"
  }).optional(),
  description: z.string({
    invalid_type_error : "Description must be a string"
  }).optional(),
  videoUrl: z.string({
    invalid_type_error : "Video URL must be a string"
  }).optional(),
  image: z.string({
    invalid_type_error : "Image must be a string"
  }).optional(),
  group : z.string({
    invalid_type_error : "Group must be a string"
    }).optional()
});



export {
  createVideoSchema,
  updateVideoSchema
}
