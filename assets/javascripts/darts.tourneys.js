jQuery(function() {
  // Create our namespace and related organizers
  window.DartsLeague = {};
  DartsLeague.Models = {};
  DartsLeague.Collections = {};
  DartsLeague.Views = {};
  
  DartsLeague.Models.Member = Backbone.Model.extend({ 
  });
  DartsLeague.Collections.Members = Backbone.Collection.extend({
      model: DartsLeague.Models.Member
  });
});
