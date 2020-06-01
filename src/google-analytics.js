const enabled = document.location.host === 'http://www.streamhub.gg';
const id = 'UA-122236740-5';
const url = `https://www.googletagmanager.com/gtag/js?id=${id}`;

if (enabled) {
  const onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', id);
    window.gtag = gtag;
  };
  const script = document.createElement('script');
  script.src = url;
  script.onload = onload;
  document.head.appendChild(script);
}

export default function(action, category, label, value) {
  if (enabled) {
    const event = {
      event_category: category,
    };
    if (label) {
      event.event_label = label;
    }
    if (value) {
      event.event_value = value;
    }
    window.gtag('event', action, event);
  } else {
    console.log('Google analytics', action, category, label, value);
  }
}
