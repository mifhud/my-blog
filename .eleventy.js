module.exports = function(eleventyConfig) {
  // Copy static files
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({"src/assets/images": "images"});
  
  // Watch for changes
  eleventyConfig.addWatchTarget("src/assets/");
  
  // Plugins
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-rss"));
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"));
  
  // Date filter
  eleventyConfig.addFilter("dateISO", (dateObj) => {
    return new Date(dateObj).toISOString();
  });
  
  eleventyConfig.addFilter("dateReadable", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long", 
      day: "numeric"
    });
  });
  
  // Current year filter
  eleventyConfig.addFilter("currentYear", () => {
    return new Date().getFullYear();
  });
  
  // Remove first H1 tag from content (to avoid title duplication)
  eleventyConfig.addFilter("removeFirstH1", (content) => {
    if (!content) return content;
    return content.replace(/<h1[^>]*>.*?<\/h1>/i, '');
  });
  
  // Collections
  eleventyConfig.addCollection("blog", function(collection) {
    return collection.getFilteredByGlob("src/blog/*.md").reverse();
  });
  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: "/my-blog/",
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site"
    }
  };
};