exports.config = {
  projectRoot: "./src/app",
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

/*
You can change /blog/:slug to /:slug if you want to show content without a prefix. Then you have to go to the app-routing.module.ts 
and change the path from blog to to ''
*/