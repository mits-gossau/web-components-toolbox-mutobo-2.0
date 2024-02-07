// @ts-check

import Footer from '../../../../es/components/web-components-toolbox/src/es/components/organisms/footer/Footer.js'

export default class FooterCustom extends Footer {
  renderCSS () {
    super.renderCSS()
    return this.fetchTemplate()
  }

  fetchTemplate () {
    super.fetchTemplate()

    switch (this.getAttribute('namespace')) {
      case 'footer-custom-':
        return this.fetchCSS([{
          path: `${this.importMetaUrl}./default-/default-.css`,
          namespace: false,
          replaces: [{
            pattern: '--footer-default-',
            flags: 'g',
            replacement: '--footer-custom-'
          }]
        }, {
          path: `${this.importMetaUrl}../../../../../../organisms/footer/custom-/custom-.css`,
          namespace: false
        }], false)
      default:
        return this.fetchCSS()
    }
  }
}
