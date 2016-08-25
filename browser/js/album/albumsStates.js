juke.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: 'albums',
    templateUrl: '/js/album/albumsTemplate.html',
    controller: 'AlbumsCtrl'
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('singleAlbumList', {
    url: 'albums/:id',
    templateUrl: '/js/album/albumTemplate.html',
    controller: 'AlbumCtrl'
  });
});