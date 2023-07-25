import type { SSTConfig } from "sst";
import { AstroSite } from "sst/constructs";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";

export default {
	config(_input) {
		return {
			name: "hackernews-astro",
			region: "us-east-1",
		};
	},
	stacks(app) {
		app.stack(function Site({ stack }) {
			const arn =
				"arn:aws:acm:us-east-1:584125941279:certificate/1c487774-af0e-4c63-adce-562f1cda20bc";

			const site = new AstroSite(stack, "site");
			stack.addOutputs({
				url: site.url,
			});
		});
	},
} satisfies SSTConfig;
