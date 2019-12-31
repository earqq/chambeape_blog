const ampScript = '<script async src="https://cdn.ampproject.org/v0.js"></script>'
const cleanStyleTags = (html) => {
  html = html.replace(/<style data-vue-ssr/g, '<style amp-custom data-vue-ssr')
  let styles = html.match(/<style amp-custom\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi)
  html = html.replace(/<style amp-custom\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')

  let oneStyle = ''
  if (styles) {
    for (let i = 0; i < styles.length; i++) {
      styles[i] = styles[i].replace(/<style amp-custom .*>/gi, '')
      styles[i] = styles[i].replace(/<\/style>/gi, '')
      styles[i] = styles[i].replace(/!important/gi, '')
      oneStyle += styles[i] + '\n'
    }
  }
  return html.replace('</head>', `\n<style amp-custom data-vue-ssr>${oneStyle}</style>\n` + '\n</head>')
}
module.exports = (html) => {
  // Add ⚡ to html tag
  html = html.replace(/<html/gi, '<html lang="es" data-n-head="lang" ⚡')


  
  
  // Remove preload and prefetch tags
  html = html.replace(/<link[^>]*rel="(?:preload|prefetch)?"[^>]*>/gi, '')
  
  // Remove amphtml tag
  html = html.replace(/<link[^>]*rel="(?:stylesheet|amp)?"[^>]*>/gi, '') 
  

  // Remove JS script tags except for ld+json
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, (match) => {
    return (/application\/ld\+json/gi.test(match)) ? match : ''
  })

  // Replace img tags with amp-img
  html = html.replace(/<img([^>]*)>/gi, (match, sub) => {
    return `<amp-img ${sub} layout=intrinsic></amp-img>`
  })
 
    // Add AMP script before </head>
    html = html.replace('</head>', ampScript + '</head>')

    html = cleanStyleTags(html)    
    const ampBoilerplate = `<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>`
    html = html.replace('</head>', ampBoilerplate + '\n</head>')
    return html
  }