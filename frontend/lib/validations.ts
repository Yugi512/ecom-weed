import { z  } from 'zod';

export const signUpSchema = z.object({
    username: z.string().min(3),
    firstName: z.string().min(3),
    lastName: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
})


export const User = z.object({
    username: z.string().min(3),
    firstName: z.string().min(3),
    lastName: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
})

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export const userAddressSchema = z.object({
    addressLineOne: z.string().min(3),
    addressLineTwo: z.string(),
    city: z.string().min(3),
    state: z.string().min(3),
    zip: z.string().min(4),
    telephone: z.string().min(10),
    mobile: z.string().min(10),
})

export const productSchema = z.object({
    name: z.string().min(3),
    imgUrl: z.string(),
    price: z.number(),
    thcLevel: z.string().min(3),
    description: z.string().min(8),
})
