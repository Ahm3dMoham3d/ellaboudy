import { z } from "zod";

export const CustomerSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  nationalId: z.number().min(14).max(14), // Assuming it's a string
  dob: z.date(), // Ensures it's a valid Date object
  address: z.string(),
  phoneNumbers: z.array(z.string()), // Array of strings
  waNumbers: z.array(z.string()), // Array of strings
  city: z.string(),
  gender: z.enum(["MALE", "FEMALE"]), // Enum with specified string literals
});

// Optional: Type inference from the schema
export type Customer = z.infer<typeof CustomerSchema>;
