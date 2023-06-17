import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './presentation/app'; 
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';

const TRACKING_ID = 'G-49B84Z5GKX'; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const tagManagerArgs = {
  gtmId: 'GTM-NWSGGH8'
};

TagManager.initialize(tagManagerArgs);


declare global {
  interface Window {
    analytics: any;
  }
}

declare global {
  interface Window {
    analytics: any;
  }
}

(function () {
  const analytics = (window.analytics = window.analytics || []);

  if (!analytics.initialize) {
    if (analytics.invoked) {
      window.console && console.error && console.error('Segment snippet included twice.');
    } else {
      analytics.invoked = true;
      analytics.methods = [
        'trackSubmit',
        'trackClick',
        'trackLink',
        'trackForm',
        'pageview',
        'identify',
        'reset',
        'group',
        'track',
        'ready',
        'alias',
        'debug',
        'page',
        'once',
        'off',
        'on',
        'addSourceMiddleware',
        'addIntegrationMiddleware',
        'setAnonymousId',
        'addDestinationMiddleware',
      ];
      analytics.factory = function (method: string) {
        return function () {
          const args = Array.prototype.slice.call(arguments);
          args.unshift(method);
          analytics.push(args);
          return analytics;
        };
      };

      for (let i = 0; i < analytics.methods.length; i++) {
        const key = analytics.methods[i];
        analytics[key] = analytics.factory(key);
      }

      analytics.load = function (key: string, options: any) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = `https://cdn.segment.com/analytics.js/v1/${key}/analytics.min.js`;
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode?.insertBefore(script, firstScript);
        analytics._loadOptions = options;
      };

      analytics._writeKey = 'ZITuO5aBZceEKOeSKEBIRj8MsPApsh7Y';
      analytics.SNIPPET_VERSION = '4.15.3';
    }

    analytics.load('ZITuO5aBZceEKOeSKEBIRj8MsPApsh7Y');
    analytics.page();
  }
})();



// Check if the user is using Edge
// if (navigator.userAgent.includes('Edg')) {
//   document.body.classList.add('edg'); 
// }

 
root.render(
  <React.StrictMode>
    <div className="loaderApp" style={{width: '100%', height: '100vh', position: 'absolute', top: '0', left: '0', background: '#010FB8', zIndex: '1'}}></div>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
