// @ts-check

import Footer from '../../../../es/components/web-components-toolbox/src/es/components/organisms/footer/Footer.js'

export default class FooterCustom extends Footer {
  fetchTemplate () {
    super.fetchTemplate()

    switch (this.getAttribute('namespace')) {
      // case 'footer-custom-':
      //   return this.fetchCSS([{
      //     path: `${this.importMetaUrl}../../../../../../organisms/footer/custom-/custom-.css`, // apply namespace since it is specific and no fallback
      //     namespace: false
      //   }])
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
