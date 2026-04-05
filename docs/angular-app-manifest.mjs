
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/parents"
  },
  {
    "renderMode": 2,
    "route": "/coaches"
  },
  {
    "renderMode": 2,
    "route": "/sponsor"
  },
  {
    "renderMode": 2,
    "route": "/bulletin"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 22327, hash: 'c67a45690ae15add15fc5b624651cf6c82c0489fb81c9f004cefdf6000ff78f2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18445, hash: 'a1437d753d3da0a348b74fc3bef301554dce067b127ed1aabaff254147823810', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 0, hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 29904, hash: 'c84b53834dab2315a03437c1ba92fdd7ec712507639e90e4051692acdd37f914', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 29902, hash: 'a0225b8f4160130794cfd956c1410a32c37685a738a7c4d146c61f24a1f577a7', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'coaches/index.html': {size: 29907, hash: '58e166a692d6c0f4228cc5f88f0937509092910869e580cda2ef065c0bdba60b', text: () => import('./assets-chunks/coaches_index_html.mjs').then(m => m.default)},
    'sponsor/index.html': {size: 29908, hash: '402b32033b087fa25058482d8b6a2af29c69f153f9c30341fc7d731077e0cfdd', text: () => import('./assets-chunks/sponsor_index_html.mjs').then(m => m.default)},
    'parents/index.html': {size: 29908, hash: 'e9864d9986b2e5f649401163b2b889b097b18a77053f50a7873895cc4e8d72c9', text: () => import('./assets-chunks/parents_index_html.mjs').then(m => m.default)},
    'bulletin/index.html': {size: 29910, hash: 'b2e0a3187a140a9c59e2ebf24232d86344128c18397be1a0eba4ba4dda4591ab', text: () => import('./assets-chunks/bulletin_index_html.mjs').then(m => m.default)},
    'styles-KMK6NXY3.css': {size: 15407, hash: 'PepHlasqSz4', text: () => import('./assets-chunks/styles-KMK6NXY3_css.mjs').then(m => m.default)}
  },
};
