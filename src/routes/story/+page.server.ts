import type { Actions } from "./$types";
import { env } from "$env/dynamic/private";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

async function createImage(prompt: string) {
  const response = await openai.images.generate({
    prompt,
    n: 1,
    size: "512x512",
    response_format: "b64_json",
  });
  return response.data[0].b64_json;
}

async function getInitialText() {}

export const actions = {
  default: async () => {
    console.log("generate story");
    return 0;
  },
} satisfies Actions;
