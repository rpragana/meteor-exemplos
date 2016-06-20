Template.projeto.onCreated(function() {
  this.projDesc = new ReactiveVar();
});

Template.projeto.events({
	"keyup #desc": function (event, instance) {
    	event.preventDefault();
	var value = $(event.target).val();
    	instance.projDesc.set(value);
  	}
});

Template.projeto.helpers({
  	projDesc: function () {
    	return Template.instance().projDesc.get();
  	}
});

