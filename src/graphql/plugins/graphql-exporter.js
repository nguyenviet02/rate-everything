import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Note: The GraphQL codegen expects an object with a plugin function
// or a named export called 'plugin'
const plugin = function (schema, documents, config) {
	const projectRoot = process.cwd();
	const realGeneratedPath = path.join(projectRoot, "src/graphql/operations");

	try {
		const generatedLists = fs.readdirSync(realGeneratedPath);

		const mapGeneratedFiles = generatedLists.map((generated) => {
			// Remove extension
			const newGenerated = generated.replace(/\.[^/.]+$/, "");
			return `export * from './generated/${newGenerated}.generated';`;
		});

		// Add types to the top of the file
		mapGeneratedFiles.unshift(`export * from './generated/types';`);

		return mapGeneratedFiles.join("\n");
	} catch (error) {
		console.error("Error in graphql-exporter plugin:", error);
		// Return a fallback if there's an error
		return `export * from './generated/types';`;
	}
};

export { plugin };

// The main export should be an object with a plugin method
export default { plugin };
