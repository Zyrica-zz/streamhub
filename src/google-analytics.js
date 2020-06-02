const enabled = document.location.host === 'www.streamhub.gg';
const id = 'UA-122236740-5';
const url = `https://www.googletagmanager.com/gtag/js?id=${id}`;

let resolveGtag
let gtagPromise = new Promise(async (resolve, reject) => {
  resolveGtag = resolve
  setTimeout(reject, 10000)
})

if (enabled) {
  const onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', id);
    resolveGtag(gtag)
  };
  const script = document.createElement('script');
  script.src = url;
  script.onload = onload;
  document.head.appendChild(script);
}

export default async function(action, category, label, value) {
  const gtag = await gtagPromise
  if (gtag && enabled) {
    const event = {
      event_category: category,
    };
    if (label) {
      event.event_label = label;
    }
    if (value) {
      event.event_value = value;
    }
    gtag('event', action, event);
  } else {
    console.log('Google analytics', action, category, label, value);
  }
}
