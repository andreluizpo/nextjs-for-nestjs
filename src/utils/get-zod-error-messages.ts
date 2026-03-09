import { z } from "zod";

export function getZodErrorMessages(error: z.ZodError): string[] {
    return error.issues.map((issue) => issue.message);
}

// import { ZodFormattedError } from "zod";

// export function getZodErrorMessages<T>(error: ZodFormattedError<T>): string[] {
//     return Object.values(error)
//         .map((field) => {
//             if (Array.isArray(field)) return field;
//             return field?._errors || [];
//         })
//         .flat()
//         .filter(Boolean);
// }
