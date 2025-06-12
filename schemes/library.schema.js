import Joi from "joi";

export const librarySchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    year: Joi.string().required().min(4).max(4),
    description: Joi.string(),
    image: Joi.string()
});