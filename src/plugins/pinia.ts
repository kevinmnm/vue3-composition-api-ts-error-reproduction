export default {
   install(app: any, store: any) {
      app.config.globalProperties.$store = store;
   },
};
