SilentIsland.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.songs = options.songs;
  },

  routes: {
    '': 'songsIndex',
  },

  songsIndex: function () {
    this.songs.fetch();
    var view = new SilentIsland.Views.SongsIndex({
      collection: this.songs,
    });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
