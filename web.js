var fa = document.createElement('style');
    fa.type = 'text/css';
    fa.textContent = '@font-face { font-family: i eat crayons; src: url("'
        + chrome.extension.getURL('fonts/i eat crayons.ttf')
        + '"); }';
document.head.appendChild(fa);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function changeFont(){
  const tl = document.getElementsByTagName('article')
	for (var tweet of tl) {
		for (var items of tweet.children) {
			const firstone = items.getElementsByTagName('a')[0]
			if (firstone && firstone.hasAttribute('href') && items.hasAttribute('data-testid') && firstone.getAttribute('href') === '/IvanDuque') {
        for (var span of items.getElementsByTagName('span')) {
          span.style.fontFamily = "'i eat crayons', sans-serif";
          span.style.color = 'orange';
          span.style.fontSize = '20px';
        }
			}
		}
	}
}
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    changeFont();
    // ...
});
// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
  //...
});