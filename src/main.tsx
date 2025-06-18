
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Script de redirection pour GitHub Pages avec React Router
(function() {
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect !== location.href) {
    history.replaceState(null, null, redirect);
  }
})();

// Gestion des paramètres de redirection GitHub Pages
(function() {
  var l = window.location;
  if (l.search) {
    var q = {};
    l.search.slice(1).split('&').forEach(function(v) {
      var a = v.split('=');
      q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
    });
    if (q.p !== undefined) {
      window.history.replaceState(null, null,
        l.pathname.slice(0, -1) + (q.p || '') +
        (q.q ? ('?' + q.q) : '') +
        l.hash
      );
    }
  }
})();

// Render the application
const root = createRoot(document.getElementById("root")!);
root.render(<App />);
