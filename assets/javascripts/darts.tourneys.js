jQuery(function() {
    // Set up the main Events Manager Application
    window.DartsLeague = {};
	DartsLeague.Models = {};
	DartsLeague.Collections = {};
	DartsLeague.Views = {};

	
	/*************************************************************
	 *
	 *  Models and Collections
	 *
	 *************************************************************/
	
	//-------------------------------------------------------------
	// Member model and collection
	//
	//  The Member model contains the member's identifying info.
	//  Within the context of the Event, the Members collection will
	//    be identified as 'teamMembers'.
	//-------------------------------------------------------------
	DartsLeague.Models.Member = Backbone.Model.extend({

	});
	DartsLeague.Collections.Members = Backbone.Collection.extend({
		model: DartsLeague.Models.Member,

	});
	
	//-------------------------------------------------------------
	// Team model and collection
	//
	//  The Team model contains the details about each team, which at this
	//    point consists of a teamMembers collection and an ID.
	//-------------------------------------------------------------
	DartsLeague.Models.Team = Backbone.Model.extend({
		initialize: function(){
			// Each team is initially containing an array, we need to convert that
			// into a Collection...
			var membersCollection = new DartsLeague.Collections.Members(this.get('teamMembers'));
			this.set('teamMembers', membersCollection);
		},
	});
	DartsLeague.Collections.Teams = Backbone.Collection.extend({
		model: DartsLeague.Models.Team,
	});
	
	//-------------------------------------------------------------
	// Games model (no collection in this context)
	//
	//  The Game model contains information about the specific game
	//    instance.
	//-------------------------------------------------------------
	DartsLeague.Models.Game = Backbone.Model.extend({

	});
	
	//-------------------------------------------------------------
	// EventGame model and collection
	//
	//  The EventGame model contains a Game model and a collection of
	//    TeamMembers (an instance of the Member collection).
	//-------------------------------------------------------------
	DartsLeague.Models.TourneyGame = Backbone.Model.extend({

		initialize: function(){
			var game = new DartsLeague.Models.Game(this.get('game'));
			var teams = new DartsLeague.Collections.Teams(this.get('teams'));
			this.set('game', game);
			this.set('teams', teams);
		},
	});
	DartsLeague.Collections.TourneyGames = Backbone.Collection.extend({
		model: DartsLeague.Models.TourneyGame,
	});
	
	//-------------------------------------------------------------
	// Event model and collection
	//
	//  The Event model is the top-level model in the event manager.
	//    It contains a collection of EventGames as well as information
	//    about the event itself.
	//-------------------------------------------------------------
	DartsLeague.Models.Tourney = Backbone.Model.extend({

		initialize: function(){
			var tourneyGames = new DartsLeague.Collections.TourneyGames(this.get('eventGames'));
			this.set('tourneyGames', tourneyGames);
		}
	});
	DartsLeague.Collections.Tourneys = Backbone.Collection.extend({
		model: DartsLeague.Models.Tourney
	});
});
