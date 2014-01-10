TD.Views.NewTaskView = Backbone.View.extend({
  events: {
    "click button.submit": "submit"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["tasks/new"]();
    that.$el.html(renderedContent);
    return that;
  },

  submit: function (event) {
    event.preventDefault();

    var formData = $(event.currentTarget.parentElement).serializeJSON();

    var task = new TD.Models.Task(formData.task);

    this.collection.add(task);
    task.save();
    Backbone.history.navigate("#/");
  }

})
