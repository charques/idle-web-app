import { LitElement, html, css } from 'lit-element';
import '@lion/button/lion-button.js';

export class IdProviderClient extends LitElement {
  
  static get styles() {
    return css`
      .id-provider-client {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }
    `;
  }

  render() {
    return html`
      <div class="id-provider-client">
        <p>Id Provider Client</p>
        <lion-button @click="${e => this.redirect(e)}">
          Redirect to Login
        </lion-button>
    </div>
    `;
  }

  redirect (e) {
    console.log('redirect to id provider', e)
    window.location = "https://id-provider.herokuapp.com/auth?client_id=idle-web-app&response_type=code&scope=openid&nonce=foobar&prompt=login"
  }
}

customElements.define('id-provider-client', IdProviderClient);