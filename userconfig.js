let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Matão, São Paulo',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "whatsapp",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
            icon_color: "#a9b665",
          },
          {
            name: "twitter",
            url: "https://twitter.com/home",
            icon: "brand-twitter-filled",
            icon_color: "#7daea3",
          },
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#e78a4e",
          },
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
        ],
      }, {
        name: "Games",
        links: [
          {
            name: "chess",
            url: "https://www.chess.com/home",
            icon: "chess-queen-filled",
            icon_color: "#a9b665",
          },
          {
            name: "monkeytype",
            url: "https://monkeytype.com/",
            icon: "keyboard",
            icon_color: "#e78a4e",
          },
          {
            name: "tetris",
            url: "https://tetris.com/",
            icon: "brand-apple-arcade",
            icon_color: "#ea6962",
          },
        ],
      }, {
        name: "Video",
        links: [
          {
            name: "disney+",
            url: "https://www.disneyplus.com/home",
            icon: "brand-disney",
            icon_color: "#7daea3",
          },
          {
            name: "primevideo",
            url: "https://www.primevideo.com/region/eu/?ref_=dv_web_unknown",
            icon: "brand-amazon",
            icon_color: "#7daea3",
          },
        ],
      }],
    },
    {
      name: "design",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "inspiration",
          links: [
            {
              name: "pinterest",
              url: "https://www.pinterest.es/",
              icon: "brand-pinterest",
              icon_color: "#ea6962",
            },
            {
              name: "artstation",
              url: "https://www.artstation.com/?sort_by=community",
              icon: "chart-area",
              icon_color: "#7daea3",
            },
            {
              name: "leonardo ai",
              url: "https://app.leonardo.ai/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "dribble",
              url: "https://dribbble.com/following",
              icon: "brand-dribbble-filled",
              icon_color: "#d3869b",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "figma",
              url: "https://www.figma.com",
              icon: "brand-figma",
              icon_color: "#d3869b",
            },
            {
              name: "uxpro",
              url: "https://uxpro.cc/",
              icon: "components",
              icon_color: "#a9b665",
            },
            {
              name: "colorhunt",
              url: "https://colorhunt.co/",
              icon: "color-picker",
              icon_color: "#ea6962",
            },
            {
              name: "adobe color",
              url: "https://color.adobe.com/es/create/color-wheel",
              icon: "brand-adobe",
              icon_color: "#7daea3",
            },
            {
              name: "terminalsexy",
              url: "https://terminal.sexy",
              icon: "prompt",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources 3d",
          links: [
            {
              name: "thingiverse",
              url: "https://www.thingiverse.com/",
              icon: "circle-letter-t",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "phind",
              url: "https://www.phind.com/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "flutter",
              url: "https://docs.flutter.dev/ui",
              icon: "brand-flutter",
              icon_color: "#7daea3",
            },
            {
              name: "hacktricks",
              url: "https://book.hacktricks.xyz/welcome/readme",
              icon: "biohazard",
              icon_color: "#ea6962",
            },
            {
              name: "vscode",
              url: "https://vscode.dev/",
              icon: "brand-vscode",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "hackthebox",
              url: "https://app.hackthebox.com",
              icon: "box",
              icon_color: "#a9b665",
            },
            {
              name: "cryptohack",
              url: "https://cryptohack.org/challenges/",
              icon: "brain",
              icon_color: "#e78a4e",
            },
            {
              name: "tryhackme",
              url: "https://tryhackme.com/dashboard",
              icon: "brand-onedrive",
              icon_color: "#ea6962",
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com/dashboard",
              icon: "code-asterix",
              icon_color: "#a9b665",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "dropbox",
              url: "https://www.dropbox.com/h?role=personal&di=left_nav",
              icon: "box-seam",
              icon_color: "#7daea3",
            },
            {
              name: "fotos",
              url: "https://photos.google.com/u/1",
              icon: "photo-filled",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();



import { decodeBlurHash } from './fast-blurhash.js'

const iconUrl = (href) => {
  const { origin } = new URL(href)
  return `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${origin}&size=32`
}

const addElm = (parent, tag, content, attributes) => {
  const elm = document.createElement(tag)
  if (content) {
    elm.innerHTML = content
  }
  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      elm[key] = value
    })
  }
  parent.append(elm)
  return elm
}

const renderNode =
  (root) =>
  ({ title, children, url: href }) => {
    const li = addElm(root, 'li')

    if (children) {
      addElm(li, 'h3', title)
      const ul = addElm(li, 'ul')
      children.forEach(renderNode(ul))
    } else if (href) {
      const icon = `<img src="${iconUrl(href)}" alt="${title.substring(
        0,
        1
      )}" />`

      addElm(li, 'a', `${icon} ${title}`, { href })
    }
  }

const renderBookmarksBar = (bookmarksBarId) => {
  chrome.bookmarks.getSubTree(bookmarksBarId, function ([rootNode]) {
    const root = document.querySelector('#root')
    rootNode.children.forEach(renderNode(root))
  })
}

const TOGGLE_KEY_NAME = 'hideBookmarksBar'
const isBookmarksBarHidden = () =>
  window.localStorage.getItem(TOGGLE_KEY_NAME) === 'yes'

const renderToggleLink = () => {
  const root = document.querySelector('#root')
  const linkElm = document.querySelector('a#toggle')

  const isHidden = isBookmarksBarHidden()
  linkElm.innerText = isHidden ? 'show' : 'hide'
  root.style.display = isHidden ? 'none' : 'flex'

  linkElm.onclick = () => {
    const wasHidden = isBookmarksBarHidden()
    window.localStorage.setItem(TOGGLE_KEY_NAME, wasHidden ? 'no' : 'yes')
    linkElm.innerText = wasHidden ? 'hide' : 'show'
    root.style.display = wasHidden ? 'flex' : 'none'
    initImage()
  }
}

const IMAGE_KEY_NAME = 'bookmarksBarImage'
const IMAGE_VALID_MS = 15 * 60 * 1000 // 15 minutes

const initImage = async () => {
  if (!isBookmarksBarHidden()) {
    hideImage()
  } else {
    const image = JSON.parse(
      window.localStorage.getItem(IMAGE_KEY_NAME) || '{}'
    )
    if (image && image.created > Date.now() - IMAGE_VALID_MS) {
      showImage(image)
    } else {
      const utmParams =
        '?utm_source=chrome-new-tab-page-bookmarks&utm_medium=referral'

      const response = await fetch(
        `https://unsplash.w2.sk/random-wallpaper.php`
      )
      const data = await response.json()

      const { urls, user, links, blur_hash: blurhash } = data || {}

      const imageUrl = urls?.raw
      const imageLink = `${links?.html}${utmParams}`

      const userFullName = [user?.first_name, user?.last_name]
        .filter(Boolean)
        .join(' ')
      const userLink = `${user?.links?.html}${utmParams}`

      const attribution = `Photo by <a href="${userLink}">${userFullName}</a> on <a href="${imageLink}">Unsplash</a>`
      const imageData = {
        url: imageUrl,
        attribution,
        blurhash,
        created: Date.now(),
      }
      window.localStorage.setItem(IMAGE_KEY_NAME, JSON.stringify(imageData))
      showImage(imageData)
    }
  }
}

const hideImage = () => {
  document.querySelector('#bg-image')?.remove()
  document.querySelector('#image-attribution')?.remove()
  document.querySelector('#canvas')?.remove()
}

const showImage = ({ url, attribution, blurhash }) => {
  let canvas = document.querySelector('#canvas')
  if (!canvas) {
    canvas = document.createElement('canvas')
    canvas.id = 'canvas'
    canvas.width = 32
    canvas.height = 32
    document.body.append(canvas)
  }
  const ctx = canvas.getContext('2d')
  const pixels = decodeBlurHash(blurhash, 32, 32)
  const imageData = new ImageData(pixels, 32, 32)
  ctx.putImageData(imageData, 0, 0)

  const imageWidth = window.innerWidth ?? 1920
  const imageHeight = window.innerHeight ?? 1080
  const pixelRatio = window.devicePixelRatio ?? 1
  const resizedImageUrl = `${url}&w=${imageWidth}&h=${imageHeight}&fit=crop&dpr=${pixelRatio}`

  let imageElm = document.querySelector('#bg-image')
  if (!imageElm) {
    imageElm = document.createElement('img')
    imageElm.id = 'bg-image'
    document.body.append(imageElm)
  }
  imageElm.style.backgroundImage = `url('${resizedImageUrl}')`

  const attributionElm = document.createElement('p')
  attributionElm.id = 'image-attribution'
  attributionElm.innerHTML = attribution
  document.body.appendChild(attributionElm)
}

window.addEventListener('load', () => {
  const bookmarksBarId = !!chrome ? '1' : 'toolbar_____'
  renderBookmarksBar(bookmarksBarId)
  renderToggleLink()
  initImage()
})

