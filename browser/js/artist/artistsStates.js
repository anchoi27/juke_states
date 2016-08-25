juke.config(function ($stateProvider) {
  $stateProvider.state('artistList', {
    url: 'artists',
    templateUrl: '/js/artist/artistsTemplate.html',
    controller: 'ArtistsCtrl'
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('singleArtistList', {
    url: 'artists/:id',
    templateUrl: '/js/artist/artistTemplate.html',
    controller: 'ArtistCtrl'
  });
});