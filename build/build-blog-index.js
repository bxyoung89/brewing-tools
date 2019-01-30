const fs = require('fs');
const path = require('path');

const blogFolder = path.join(__dirname, '../src/data/blog-posts');
const dataFolder = path.join(__dirname, '../src/data');

const files = fs.readdirSync(blogFolder);

const blogData = [];

files.forEach(file => {
	const fileContents = `${fs.readFileSync(path.join(blogFolder, file))}`;
	const firstLine = fileContents.split("\n")[0].replace('#', '');
	const fileName = file.replace('.md', '');
	const dateParts = fileName.split('-');
	const year = dateParts[0] || 1;
	const month = dateParts[1] || 1;
	const day = dateParts[2] || 1;
	const date = new Date(year, month, day);
	blogData.push({
		fileName: file,
		title: firstLine,
		formattedDate: `${month}/${day}/${year}`,
		timestamp: Number.isNaN(date.getTime()) ? 0 : date.getTime(),
	});
});

const sortedBlogData = blogData.sort((a, b) => b.timestamp - a.timestamp);

fs.writeFileSync(path.join(dataFolder, 'blog-data.js'), `export default ${JSON.stringify(sortedBlogData)};`);