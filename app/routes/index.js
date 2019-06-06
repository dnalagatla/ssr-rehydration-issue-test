import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 10000);
    });
  },

  actions: {
    loading(transition, originRoute) {
      return true; // allows the loading template to be shown
    }
  }
});