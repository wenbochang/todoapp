TD.Views.TasksListView = Backbone.View.extend({
  events: {
    "click li.task": "showTask"
  },

  render: function() {
    var view = this;

    var renderedContent = JST["tasks/list"]({
      tasks: view.collection
    });

    view.$el.html(renderedContent);
    return view;
  },

  showTask: function(event) {
    console.log( $(event.currentTarget).attr("data-id") );
  }
});
