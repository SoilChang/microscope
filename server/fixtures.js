if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Meteor',
		url: 'http://meteor.com'
	});
	Posts.insert({
		title: 'The Meteor Book',
		url: 'http://themeteorbook.com'
	});
	Posts.insert({
		title: 'Introducing Telescope',
		url: 'http://sachagreif.com/introducing-telescope/'
	});
}