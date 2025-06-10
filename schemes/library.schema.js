import Joi from "joi";

export const librarySchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    release_date: Joi.date().required(),
    image: Joi.string()
});