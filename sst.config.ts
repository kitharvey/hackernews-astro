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
				"arn:aws:acm:us-east-1:584125941279:certificate/770bf3ef-89ae-4542-8c9e-364ce5a460bd";

			const site = new AstroSite(stack, "site", {
				customDomain: {
					isExternalDomain: true,
					domainName: "hackernews-astro.kitharvey.cc",
					cdk: {
						certificate: Certificate.fromCertificateArn(
							stack,
							"Certificate",
							arn
						),
					},
				},
			});
			stack.addOutputs({
				url: site.url,
			});
		});
	},
} satisfies SSTConfig;
