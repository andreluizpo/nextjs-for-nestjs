import slugify from "slugify";
import { makeRandomString } from "./make-random-string";

export const makeSlugFromText = (text: string) => {
    const slug = slugify(text, {
        lower: true, // converte para minúsculas, o padrão é `false`
        strict: true, // remove caracteres especiais, exceto caracteres de substituição, o padrão é `false`
        trim: true, // remove caracteres de substituição iniciais e finais, o padrão é `true`
    });

    return `${slug}-${makeRandomString()}`;
};
