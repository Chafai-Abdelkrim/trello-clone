import { z } from "zod";

export const UpdateBoard = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title is is Required",
    })
    .min(3, {
      message: "Title is to short.",
    }),
  id: z.string(),
});
