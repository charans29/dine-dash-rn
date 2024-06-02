import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const client = SanityClient({
    projectId: "PROJECT_ID",
    dataset: "production",
    useCn: true,
    apiVersion: "2022-02-03"
 })

const builder = ImageUrlBuilder(client);
export const urlFor = (src) => builder.image(src);

export default client;