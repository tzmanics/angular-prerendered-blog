exports.config = {
  projectRoot: "./src",
  projectName: "angular-prerendered-blog",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};