// postcss.config.js
module.exports = {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nesting',  // Specify the nesting plugin
      tailwindcss: {},
      autoprefixer: {},
    }
  }
  