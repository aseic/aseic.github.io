window.addEventListener('load', () => {
	var path = window.location.pathname;
	if(path.endsWith('.html')) {
		path = path.substr(0, path.lastIndexOf('/') + 1);
	}

	const base = `https://raw.githubusercontent.com/aseic/assets/master${path}`;
	const schema = 'aseic-rel://';

	for(const link of document.getElementsByTagName("a")) {
		if(link.href.startsWith(schema)) {
			link.href = base + link.href.substr(schema.length);
		}
	}
});
