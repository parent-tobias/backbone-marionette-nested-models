jQuery(function() {
  // Create our namespace and related organizers
  window.DartsLeague = {};
  DartsLeague.Models = {};
  DartsLeague.Collections = {};
  DartsLeague.Views = {};
  
  /********************************************
   * Models and Collections
   ********************************************/

  // Member model/collection
  DartsLeague.Models.Member = Backbone.Model.extend({ 
  });
  
  DartsLeague.Collections.Members = Backbone.Collection.extend({
      model: DartsLeague.Models.Member
  });
  
  // Team model/collection
  DartsLeague.Models.Team = Backbone.Model.extend({
  });
  
  DartsLeague.Collections.Teams = Backbone.Collection.extend({
     model: DartsLeague.Models.Team 
  });
  
  // Game model, no collection
  DartsLeague.Models.Game = Backbone.Model.extend({
  });
  
  // TourneyGame model/collection
  DartsLeague.Models.TourneyGame = Backbone.Model.extend({
  });
  
  DartsLeague.Collections.TourneyGames = Backbone.Collection.extend({
      model: DartsLeague.Models.TourneyGame
  });
  
  // Tourney model/collection
  DartsLeague.Models.Tourney = Backbone.Collection.extend({
  });
  
  DartsLeague.Collections.Tourneys = Backbone.Collection.extend({
      model: DartsLeague.Models.Tourney
  });
  
});
