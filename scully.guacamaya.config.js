exports.config = {
  projectRoot: "./src",
  projectName: "guacamaya",
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