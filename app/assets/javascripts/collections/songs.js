SilentIsland.Collections.Songs = Backbone.Collection.extend({
  url: '/api/songs',

  model: SilentIsland.Models.Song,

  parse: SilentIsland.Mixins.PageableParse,

  getOrFetch: function (id, callback) {
    var collection = this;
    var model = collection.get(id);
    if (!model) {
      model = new SilentIsland.Models.Song({ id: id });
    }
    model.fetch({
      success: function () {
        collection.add(model);
        callback && callback(model);
      }
    });
    return model;
  }
});
