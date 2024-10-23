var scripts = [
  "https://cdn.jsdelivr.net/gh/Aicirou/goindex-theme-acrou/dist/js/app.da7f5f3f.js",
  "https://cdn.jsdelivr.net/gh/Aicirou/goindex-theme-acrou/dist/js/chunk-vendors.3c185c97.js",
];
var cdnjs = [
  "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js",
  "https://cdn.jsdelivr.net/npm/vue-i18n/dist/vue-i18n.min.js",
  "https://cdn.jsdelivr.net/npm/vue-router/dist/vue-router.min.js",
  "https://cdn.jsdelivr.net/npm/vuex/dist/vuex.js",
  "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js",
  "https://cdn.jsdelivr.net/npm/element-ui/lib/index.js",
  "https://cdn.jsdelivr.net/npm/lodash/lodash.min.js",
  "https://cdn.jsdelivr.net/npm/js-cookie/src/js.cookie.min.js",
  "https://cdn.jsdelivr.net/npm/lowdb/dist/low.min.js",
  "https://cdn.jsdelivr.net/npm/lowdb/dist/LocalStorage.min.js",
  "https://at.alicdn.com/t/font_1760192_8add3xcxs4u.js",
];
cdnjs.forEach((item) => {
  document.write('<script src="' + item + '"></script>');
});
scripts.forEach((item) => {
  document.write('<script src="' + item + '"></script>');
});
