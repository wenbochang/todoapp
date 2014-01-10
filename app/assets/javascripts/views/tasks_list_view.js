TD.Views.TasksListView = Backbone.View.extend({
  initialize: function() {
    var that = this;

    var renderCallback = that.render.bind(that);
    that.listenTo(that.collection, "add", this.render);
    that.listenTo(that.collection, "change", renderCallback);
    that.listenTo(that.collection, "remove", renderCallback);
  },


  render: function() {
    var view = this;

    var renderedContent = JST["tasks/list"]({
      tasks: view.collection
    });

    view.$el.html(renderedContent);
    return view;
  }

});
