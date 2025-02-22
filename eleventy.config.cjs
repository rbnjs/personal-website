module.exports = function(eleventyConfig) {
	eleventyConfig.addWatchTarget("index.css");
	eleventyConfig.addPassthroughCopy("img");
	eleventyConfig.addPassthroughCopy("fonts");
	eleventyConfig.addFilter("limit", function(array, limit) {
		return array.slice(0, limit);
	});
	eleventyConfig.addCollection("allTags", function (collection) {
		let tagSet = new Set();
		collection.getAll().forEach(item => {
			if (item.data.tags) {
				item.data.tags.forEach(tag => tagSet.add(tag));
			}
		});
		return Array.from(tagSet).sort();
	});
};
