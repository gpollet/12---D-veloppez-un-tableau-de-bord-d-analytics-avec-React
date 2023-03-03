const fsPromise = require("fs/promises");

/**
 * Script that automatically creates/updates index files for chosen folders.
 * Must be placed in root directory (NOT in frontend/backend folders, as Vite blocks fs).
 * Run command : "node .\styleIndexUpdater.js"
 */

const scriptSettings = {
	// Path to the style folder containing the scss files
	styleFolderPath: "./frontend/src/style/",
	// Folders that need to get their index file updated by the script
	foldersToUpdate: ["components", "pages"],
};

const createStyleIndexFiles = async (folderToUpdate, styleFolder, dirContent) => {
	// Search for an existing index file in the folder to update
	const thatIndexFile = dirContent.find(el => el.includes("index"));
	// If no index file was found, create a new one
	const indexFile = thatIndexFile ? thatIndexFile : `_${folderToUpdate}-index.scss`;
	// Deletes the index file from files listed in the directory, otherwise it would forward itself and throw an error
	dirContent = dirContent.filter(el => el !== thatIndexFile);
	// Generates the @forward string for each file in the folder
	const filesToImport = dirContent.map(file => {
		const formatedFileName = file.replace("_", "@forward './").replace(".scss", `';\n`);
		return formatedFileName;
	});
	// Updates the index file by recreating it
	await fsPromise.writeFile(styleFolder + "/" + indexFile, [...filesToImport]);
};

// Play the script on every folder listed in scriptSettings.foldersToUpdate
scriptSettings.foldersToUpdate.map(async folderToUpdate => {
	const styleFolder = `${scriptSettings.styleFolderPath + folderToUpdate}`;
	const dirContent = await fsPromise.readdir(styleFolder);
	createStyleIndexFiles(folderToUpdate, styleFolder, dirContent);
	console.log(`[${folderToUpdate}] index file successfully updated.`)
});
