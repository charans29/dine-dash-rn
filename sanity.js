import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId: "PROJECT_ID",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
});

const builder = imageUrlBuilder(client);

export const urlFor = (src) => builder.image(src);

export default client;