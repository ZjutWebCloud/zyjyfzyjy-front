var fs = require('fs');
var path = require('path');

var config = require('../config');

var viewsTemplateRoot = process.env.NODE_ENV === 'production'
	? config.build.viewsTemplateRoot
	: config.dev.viewsTemplateRoot

// var viewsRoot = process.env.NODE_ENV === 'production'
// 	? config.build.viewsRoot
// 	: config.dev.viewsRoot

var htmlRegExp = /\.html$/;


function fileDisplay(filePath, dirName) {
	let templates = [];
	let files = fs.readdirSync(filePath)
	for (let i = 0; i < files.length; i++) {
		let fileName = files[i];
		var filedir = path.join(filePath, fileName);

		let stats = fs.statSync(filedir);
		var isFile = stats.isFile();
		var isDir = stats.isDirectory();
		if (isFile && htmlRegExp.test(fileName)) {
			templates.push({
				dirPath: filePath,
				fileName,
				filePath: filedir,
				name: dirName,
				distFileName: filePath.replace(viewsTemplateRoot, '') + '.html'
			})
		}
		if (isDir) {
			templates = templates.concat(fileDisplay(filedir, fileName));
		}
	}
	return templates;
}

module.exports = fileDisplay(viewsTemplateRoot)
