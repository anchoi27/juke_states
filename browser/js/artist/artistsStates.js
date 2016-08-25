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

juke.config(function ($stateProvider) {
  $stateProvider.state('singleArtistList.albums', {
    url: 'albums',
    templateUrl: '/js/artist/artistAlbumTemplate.html',
    controller: 'AlbumsCtrl'
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('singleArtistList.songs', {
    url: 'songs',
    templateUrl: '/js/artist/artistSongsTemplate.html',
    controller: 'ArtistCtrl'
  });
});