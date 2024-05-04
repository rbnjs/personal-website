const { EleventyI18nPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        // any valid BCP 47-compatible language tag is supported
        defaultLanguage: "en", // Required, this site uses "en"
    });
    eleventyConfig.addWatchTarget("index.css");
    eleventyConfig.addPassthroughCopy("img");
};
