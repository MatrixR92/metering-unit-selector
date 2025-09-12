self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('app-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png'
		'img/AB3_2400_H1.800.png'
		'img/ASMAX_V2_1.png'
		'img/avena.svg'
		'img/cerca_codice.svg'
		'img/colza.svg'
		'img/cumino.svg'
		'img/de.png'
		'img/en.png'
		'img/erba_medica.svg'
		'img/es.png'
		'img/fagioli.svg'
		'img/farro.svg'
		'img/favino.svg'
		'img/fr.png'
		'img/frumento.svg'
		'img/grano_saraceno.svg'
		'img/home.svg'
		'img/it.png'
		'img/JETM_RMT_1.png'
		'img/JETX_RTEK_1.png'
		'img/lino.svg'
		'img/logo.svg'
		'img/loietto.svg'
		'img/lupini.svg'
		'img/m79a00548.svg'
		'img/m79a00549.svg'
		'img/m79a00550.svg'
		'img/m79a00552.svg'
		'img/m79a00649.svg'
		'img/m79a00650.svg'
		'img/m79a00651.svg'
		'img/m79a00833.svg'
		'img/miglio.svg'
		'img/orzo.svg'
		'img/papavero.svg'
		'img/phacelia.svg'
		'img/piselli.svg'
		'img/PRO1.png'
		'img/rape.svg'
		'img/ravanello_foraggio.svg'
		'img/riso.svg'
		'img/rocchetto_test.svg'
		'img/segale.svg'
		'img/semi_erba.svg'
		'img/senape.svg'
		'img/soia.svg'
		'img/trifoglio_rosso.svg'
		'img/trova_rocchetto.svg'
		'img/vecce.svg'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
