import { defineConfig } from "astro/config";
import aws from "astro-sst/lambda";
import tailwind from "@astrojs/tailwind";
// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	output: "server",
	adapter: aws(),
});
