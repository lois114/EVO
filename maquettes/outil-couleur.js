/* =========================================================
   Evø · OUTIL DE MAQUETTE, pas de la production.
   Pastille dans le header pour changer en direct la couleur du haut de page (header + hero).
   Le reste de la page ne bouge pas : les variables sont posées sur ces deux éléments seulement.
   Le choix est mémorisé et partagé entre B1, B2 et B3, pour comparer les variantes à couleur égale.
   Pour le retirer : supprimer ce fichier et la balise <script src="outil-couleur.js"> de chaque maquette.
   ========================================================= */
(function () {
  'use strict';

  var doc = document;
  var header = doc.getElementById('evo-header');
  var hero = doc.getElementById('hero');
  var inner = header ? header.querySelector('.evo-header__inner') : null;
  var wordmark = inner ? inner.querySelector('.evo-wordmark') : null;
  if (!header || !hero || !inner || !wordmark) { return; }

  var KEY = 'evo-couleur-haut';
  var scope = [header, hero];
  var rootStyle = window.getComputedStyle(doc.documentElement);
  function token(name) { return rootStyle.getPropertyValue(name).trim(); }

  /* Les teintes proposées viennent des tokens de la charte, aucune valeur en dur ici */
  var TONES = [
    { id: 'vert-profond', label: 'Vert profond', color: token('--deep') },
    { id: 'vert-doux', label: 'Vert doux', color: token('--deep-2') },
    { id: 'encre', label: 'Encre', color: token('--evo-ink') },
    { id: 'papier', label: 'Papier', color: token('--evo-paper') },
    { id: 'papier-clair', label: 'Papier clair', color: token('--evo-paper-2') }
  ];
  var PAPER = token('--evo-paper');
  var INK = token('--evo-ink');

  function luminance(hex) {
    var m = /^#?([0-9a-f]{6})$/i.exec(hex);
    if (!m) { return 0; }
    var n = parseInt(m[1], 16);
    var c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }
  function contrast(a, b) {
    var la = luminance(a), lb = luminance(b);
    return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
  }

  /* ---------- Styles de l'outil et règles de portée (uniquement des tokens) ---------- */
  var css = doc.createElement('style');
  css.textContent = [
    /* tokens dérivés recalculés là où la couleur est posée */
    '.evo-tone-scope{--deep-2:color-mix(in srgb, var(--deep) 84%, var(--on-deep));--on-deep-muted:color-mix(in srgb, var(--on-deep) 74%, transparent);--on-deep-line:color-mix(in srgb, var(--on-deep) 18%, transparent);--on-deep-soft:color-mix(in srgb, var(--on-deep) 86%, var(--deep));--glyph:color-mix(in srgb, var(--on-deep) 10%, transparent);--glass:color-mix(in srgb, var(--on-deep) 8%, transparent)}',
    /* sur fond clair, le doré ne porte ni texte ni coche (règle de la charte) */
    '[data-evo-tone="light"] .evo-hero__sub .evo-o{color:inherit}',
    '[data-evo-tone="light"] .evo-benefit .evo-ico{color:var(--on-deep)}',
    '[data-evo-tone="light"] .evo-hero__card-mark{background:var(--on-deep)}',
    '.evo-tone{position:relative;flex:none;margin-right:auto}',
    '.evo-tone__btn{display:flex;align-items:center;justify-content:center;width:2.75rem;height:2.75rem;padding:0;border:0;border-radius:50%;background:transparent;color:inherit;cursor:pointer}',
    '.evo-tone__dot{display:block;width:1.5rem;height:1.5rem;border:2px solid currentColor;border-radius:50%;background:var(--deep);box-shadow:inset 0 0 0 2px var(--surface)}',
    '.evo-tone__panel{position:absolute;z-index:60;top:calc(100% + .5rem);left:0;width:max-content;max-width:calc(100vw - 2 * var(--gutter));padding:1rem;border:1px solid var(--line);border-radius:var(--radius-sm);background:var(--surface);color:var(--text);box-shadow:var(--card-shadow);--ring:var(--text)}',
    '.evo-tone__title{font-family:var(--font-mono);font-size:var(--fs-label);font-weight:500;letter-spacing:.08em;text-transform:uppercase}',
    '.evo-tone__list{display:flex;flex-wrap:wrap;gap:.25rem;margin-top:.5rem}',
    '.evo-tone__swatch{display:flex;align-items:center;justify-content:center;width:2.75rem;height:2.75rem;padding:0;border:0;border-radius:50%;background:transparent;cursor:pointer}',
    '.evo-tone__swatch span{display:block;width:2rem;height:2rem;border:1px solid var(--text-muted);border-radius:50%;background:var(--swatch)}',
    '.evo-tone__swatch[aria-pressed="true"] span{box-shadow:0 0 0 2px var(--surface), 0 0 0 4px var(--text)}',
    '.evo-tone__current{margin-top:.5rem;font-size:var(--fs-small);font-weight:700}',
    '.evo-tone__row{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.5rem 1rem;margin-top:.75rem;padding-top:.75rem;border-top:1px solid var(--line);font-size:var(--fs-small)}',
    '.evo-tone__row label{display:flex;align-items:center;gap:.5rem;min-height:2.75rem;cursor:pointer}',
    '.evo-tone__row input{width:2.75rem;height:2rem;padding:0;border:1px solid var(--text-muted);border-radius:6px;background:transparent;cursor:pointer}',
    '.evo-tone__reset{min-height:2.75rem;padding:0 .25rem;border:0;background:transparent;color:inherit;font-size:var(--fs-small);text-decoration:underline;text-underline-offset:.2em;cursor:pointer}',
    '@media (max-width:420px){.evo-header__inner{gap:.5rem}}'
  ].join('\n');
  doc.head.appendChild(css);

  /* ---------- Interface ---------- */
  var tool = doc.createElement('div');
  tool.className = 'evo-tone';
  tool.innerHTML =
    '<button type="button" class="evo-tone__btn" id="evo-tone-btn" aria-expanded="false" aria-controls="evo-tone-panel">' +
      '<span class="evo-tone__dot" aria-hidden="true"></span><span class="evo-sr">Changer la couleur du haut de page (outil de maquette)</span>' +
    '</button>' +
    '<div class="evo-tone__panel" id="evo-tone-panel" role="group" aria-labelledby="evo-tone-title" hidden>' +
      '<p class="evo-tone__title" id="evo-tone-title">Couleur du haut de page</p>' +
      '<div class="evo-tone__list"></div>' +
      '<p class="evo-tone__current" aria-live="polite"></p>' +
      '<div class="evo-tone__row">' +
        '<label for="evo-tone-custom">Autre couleur <input type="color" id="evo-tone-custom"></label>' +
        '<button type="button" class="evo-tone__reset">Réinitialiser</button>' +
      '</div>' +
    '</div>';
  wordmark.insertAdjacentElement('afterend', tool);

  var btn = tool.querySelector('.evo-tone__btn');
  var panel = tool.querySelector('.evo-tone__panel');
  var list = tool.querySelector('.evo-tone__list');
  var current = tool.querySelector('.evo-tone__current');
  var custom = tool.querySelector('#evo-tone-custom');
  var reset = tool.querySelector('.evo-tone__reset');

  TONES.forEach(function (tone) {
    var b = doc.createElement('button');
    b.type = 'button';
    b.className = 'evo-tone__swatch';
    b.setAttribute('aria-pressed', 'false');
    b.setAttribute('data-color', tone.color.toLowerCase());
    b.style.setProperty('--swatch', tone.color);
    b.innerHTML = '<span aria-hidden="true"></span><span class="evo-sr">' + tone.label + '</span>';
    b.addEventListener('click', function () { apply(tone.color, true); });
    list.appendChild(b);
  });

  function labelFor(color) {
    var found = TONES.filter(function (t) { return t.color.toLowerCase() === color.toLowerCase(); })[0];
    return found ? found.label : 'Autre couleur · ' + color.toUpperCase();
  }

  function apply(color, save) {
    var isDefault = color.toLowerCase() === TONES[0].color.toLowerCase();
    var light = contrast(color, INK) > contrast(color, PAPER);
    scope.forEach(function (el) {
      if (isDefault) {
        el.style.removeProperty('--deep');
        el.style.removeProperty('--on-deep');
        el.classList.remove('evo-tone-scope');
        el.removeAttribute('data-evo-tone');
      } else {
        el.style.setProperty('--deep', color);
        el.style.setProperty('--on-deep', light ? INK : PAPER);
        el.classList.add('evo-tone-scope');
        el.setAttribute('data-evo-tone', light ? 'light' : 'dark');
      }
    });
    Array.prototype.forEach.call(list.children, function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-color') === color.toLowerCase() ? 'true' : 'false');
    });
    current.textContent = labelFor(color);
    custom.value = color.toLowerCase();
    if (save) {
      try {
        if (isDefault) { window.localStorage.removeItem(KEY); } else { window.localStorage.setItem(KEY, color); }
      } catch (e) { /* stockage indisponible : on continue sans mémoriser */ }
    }
  }

  function setOpen(open) {
    panel.hidden = !open;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  btn.addEventListener('click', function () { setOpen(panel.hidden); });
  doc.addEventListener('click', function (ev) { if (!panel.hidden && !tool.contains(ev.target)) { setOpen(false); } });
  doc.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && !panel.hidden) { setOpen(false); btn.focus(); }
  });
  custom.addEventListener('input', function () { apply(custom.value, true); });
  reset.addEventListener('click', function () { apply(TONES[0].color, true); });

  var saved = null;
  try { saved = window.localStorage.getItem(KEY); } catch (e) { saved = null; }
  apply(/^#[0-9a-f]{6}$/i.test(saved || '') ? saved : TONES[0].color, false);
})();
