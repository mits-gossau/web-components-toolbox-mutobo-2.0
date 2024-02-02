// @ts-check

import Footer from '../../../../es/components/web-components-toolbox/src/es/components/organisms/footer/Footer.js'

export default class FooterCustom extends Footer {
  connectedCallback () {
    this.renderExtCSS()
  }

  renderExtCSS () {
    this.css = /* css */`
      :host {
        background-color:var(--invert-background-color, yellow); /* TESTING! */
      }
      
      @media only screen and (max-width: _max-width_) {
        :host {}
      }
    `
    return this.fetchTemplate()
  }

  fetchTemplate () {
    switch (this.getAttribute('namespace')) {
      case 'footer-custom-':
        return this.fetchCSS([{
          path: '.../../../../organisms/footer/custom-/custom-.css',
          namespace: false
        }])
    }
  }
}
