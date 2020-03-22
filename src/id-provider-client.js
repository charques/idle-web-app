import { LitElement, html, css } from 'lit-element';
import '@lion/button/lion-button.js';

export class IdProviderClient extends LitElement {
  static get properties() {
    return {
      showRedirect: { type: Boolean },
      showInfo: { type: Boolean}
    };
  }

  static get styles() {
    return css`
      .id-provider-client {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }
    `;
  }

  /**
   * The connectedCallback is called when the element is inserted to the DOM.
   */
  connectedCallback() {
    super.connectedCallback();
    
    this._idFlowDetection();
  }

  render() {
    return html`
      <div class="id-provider-client">
        <p>Id Provider Client</p>

        ${this.showRedirect
          ? html`
              <lion-button @click=${this._redirectToLogin}>
                Redirect to Login
              </lion-button>
            `
          : ""}
        
    </div>
    `;
  }

  _idFlowDetection() {
    var urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.has('code')) {
      this.showRedirect = false;
      console.log("code: " +  urlParams.get('code'));

      let code = urlParams.get('code')
      fetch("https://id-provider.herokuapp.com/token?grant_type=authorization_code&code=" + code + "&client_id=idle-web-app&redirect_uri=https://idle-web-app.herokuapp.com/cb", {
        method: 'post'
      })
      .then(r => r.json())
      .then(r => {
        this.response = r.results;
      });
    }
    else {
      this.showRedirect = true;
    }
  }

  _redirectToLogin () {
    console.log('redirect to id provider');
    window.location = "https://id-provider.herokuapp.com/auth?client_id=idle-web-app&response_type=code&scope=openid&nonce=foobar&prompt=login";
  }
}

customElements.define('id-provider-client', IdProviderClient);