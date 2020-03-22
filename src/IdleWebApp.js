import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';
import './id-provider-client.js'

//https://id-provider.herokuapp.com/auth?client_id=foo&response_type=code&scope=openid+email&nonce=foobar&prompt=login

export class IdleWebApp extends LitElement {
  
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }

      main {
        flex-grow: 1;
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  render() {
    return html`
      <main>
        <div class="logo">${openWcLogo}</div>
        <id-provider-client></id-provider-client>
      </main>

      <p class="app-footer">
        Made with love by @charques
      </p>
    `;
  }
}
