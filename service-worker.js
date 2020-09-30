if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"126a3bc3bc645f6b03b80086fa6abb18","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"126a3bc3bc645f6b03b80086fa6abb18","url":"index.html"},{"revision":"5bf2c4314e47918d2939829eec143f4d","url":"precache-manifest.5bf2c4314e47918d2939829eec143f4d.js"},{"revision":"309e0fde8412ba282ff80b6e4411b55b","url":"static/css/15.0c8e1d7b.chunk.css"},{"revision":"7d4e1e17bdf366f877b4d150879e4be7","url":"static/js/0.4e9d56d0.chunk.js"},{"revision":"526072edfde18133bfccd408ddeac2f1","url":"static/js/1.f4ff5a3d.chunk.js"},{"revision":"9a2d09a033e96d6636d9b54b88cc2404","url":"static/js/10.ff404ea0.chunk.js"},{"revision":"7ee8d9c7b3223a2ae0c57cd7cb135775","url":"static/js/11.7ff739a2.chunk.js"},{"revision":"62d90195b48590ca00a729412dd54ce1","url":"static/js/12.cf8aa346.chunk.js"},{"revision":"096fee898e0b50ec5b4485ef2cdd4737","url":"static/js/13.96ce3f32.chunk.js"},{"revision":"6be652f4091fc81a334a5734f2edde17","url":"static/js/14.f273b67e.chunk.js"},{"revision":"b081cbbc762fe8b31fb8e772d43b2019","url":"static/js/15.739a939b.chunk.js"},{"revision":"350f6ac18ad52c773253deb1d8b356de","url":"static/js/16.8a20fcc7.chunk.js"},{"revision":"b3776b54f6f6603f88914d42c00caeeb","url":"static/js/17.1becda0e.chunk.js"},{"revision":"4806b0b9b38ee3376166ebf9f8d14eea","url":"static/js/18.8cf140f2.chunk.js"},{"revision":"cc6cc1af065cde69c59baab689f4ae52","url":"static/js/19.e036a738.chunk.js"},{"revision":"22a0ea3abb6535a17d1d2ae3bbadffe7","url":"static/js/2.852d72c6.chunk.js"},{"revision":"444b60440704754d6aeef0693a04e190","url":"static/js/20.3e68316e.chunk.js"},{"revision":"b06a8f482e27e6700cb982d9505d06a2","url":"static/js/21.0941bf20.chunk.js"},{"revision":"e60c36cc1f844c45192e42d96f18b27f","url":"static/js/22.b9a592e5.chunk.js"},{"revision":"336b84ea7e177896b2667fe4cdcef16b","url":"static/js/23.7a04a291.chunk.js"},{"revision":"6f3b50c0aa15fcaf0434c1d6819be704","url":"static/js/24.50f21ad5.chunk.js"},{"revision":"48f6c0a7b66d5583292d123916c6bcab","url":"static/js/25.bb64025f.chunk.js"},{"revision":"c01c61551db49bb6e44eb15ad3099284","url":"static/js/26.22f181fe.chunk.js"},{"revision":"98f19e3b6e34139fbc33a1efce657406","url":"static/js/27.8839ec8e.chunk.js"},{"revision":"9e22537c26319fa607570a707ecfea32","url":"static/js/28.27fb3a5a.chunk.js"},{"revision":"11a3a8e2702fc75b5ce45dcf0774ab36","url":"static/js/29.bf273d4f.chunk.js"},{"revision":"a0ac6d90f855433940989d7fbf6d851f","url":"static/js/3.6fe98d4a.chunk.js"},{"revision":"89355d17d5613d417fd1d360bb88f93d","url":"static/js/30.18a71a3a.chunk.js"},{"revision":"0fed23e6802ff990b30f049c0d21acd4","url":"static/js/31.e89f5f0f.chunk.js"},{"revision":"c8c006e2105c0adc8bbc7b40be5f7e61","url":"static/js/32.635cfbe3.chunk.js"},{"revision":"2466741257bdde056aefe97a14bbdda8","url":"static/js/33.b312a14b.chunk.js"},{"revision":"32384ae2b3381b06621cd7432a34b2a1","url":"static/js/34.d8d9e933.chunk.js"},{"revision":"6194f557e6b5e4f1221dc1b5f375d94b","url":"static/js/35.4b1200af.chunk.js"},{"revision":"6d41a7a3e3751992da832c10477e9980","url":"static/js/36.44adb09d.chunk.js"},{"revision":"b14616e5e282d44f2ba3581eb4633128","url":"static/js/37.e517f828.chunk.js"},{"revision":"e7796017b845374d0a079eb6bc8126b1","url":"static/js/4.c5ff0f43.chunk.js"},{"revision":"a2dd7702cc8797a5895a81e8cc53f551","url":"static/js/5.518f6213.chunk.js"},{"revision":"109f5049473c0fce691c85fa48260a12","url":"static/js/6.0b1c5067.chunk.js"},{"revision":"f1e8ad8d5a73adc7a98f034a9ee0ec39","url":"static/js/9.2d74b2c6.chunk.js"},{"revision":"5a0c761590371974b05f360b143a131a","url":"static/js/main.6bdf73d9.chunk.js"},{"revision":"bb8782730c66b917110b71f540cee886","url":"static/js/runtime-main.86c75b14.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
