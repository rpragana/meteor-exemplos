
Template.nota.helpers({  
    nota: function () {
        return Nota.find({});
    }
});

Template.nota.events({  
    'submit #nota-form': function (e, tmpl) {
        e.preventDefault();
		var title = tmpl.$('[name=title]').val();
        var description = tmpl.$('[name=description]').val();
        if (title && description) {
            Nota.insert({title: title, description: description});
        }
    },
	'click [name=delete]': function(e, tmpl) {
              e.preventDefault();
	      Nota.remove(this.nt._id);
	}
});

Template.notaItem.helpers({  
	rownum: function(ix) {
		return ix+1;
	}
});



