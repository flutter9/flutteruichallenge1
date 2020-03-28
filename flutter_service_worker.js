'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/chart.png": "a4035cd002d7e82d8006cf8880736eba",
"/assets/FontManifest.json": "c8708a58ad1aa4c380eec975c003f5bf",
"/assets/fonts/Montserrat-Black.ttf": "e3242149669bebf6afc4b0b5d22ec6ae",
"/assets/fonts/Montserrat-Light.ttf": "2f354053d1c9c36f533ebd226698bfa5",
"/assets/fonts/Montserrat-Regular.ttf": "a8a117360e71de94ae3b0b0f8d15b44d",
"/assets/fonts/Montserrat-SemiBold.ttf": "bbcd5bbb5993808a92df01a5dfef77cd",
"/assets/fonts/Montserrat-Bold.ttf": "a3b387c93882604792867736aecd56c8",
"/assets/fonts/Montserrat-Italic.ttf": "b0cf52e5f2f3e3fbc204cb06fd0e7b11",
"/assets/fonts/Montserrat-Medium.ttf": "0098f804fc2d06af52650e0b8ed3390c",
"/assets/fonts/Montserrat-Thin.ttf": "b50f5872459e8e17eaffd5d57a2b2f8e",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "aaf38b50a9b494f30b0c6f27e97966f2",
"/assets/LICENSE": "c6ad3b7d8c385b756034810b371f9374",
"/main.dart.js": "1961bc2a55c4a5fa5b32fa3af045170b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
