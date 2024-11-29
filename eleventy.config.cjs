module.exports = function(eleventyConfig) {
	eleventyConfig.addWatchTarget("index.css");
	eleventyConfig.addPassthroughCopy("img");
	eleventyConfig.addFilter("limit", function(array, limit) {
		return array.slice(0, limit);
	});
};
