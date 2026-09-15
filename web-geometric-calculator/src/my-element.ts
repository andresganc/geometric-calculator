import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import heroImg from './assets/hero.png'
import litLogo from './assets/lit.svg'
import viteLogo from './assets/vite.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <section id="center">
        <div class="hero">
          <img src=${heroImg} class="base" width="170" height="179" alt="" />
          <img src=${litLogo} class="framework" alt="Lit logo" />
          <img src=${viteLogo} class="vite" alt="Vite logo" />
        </div>

        <div>
          <slot></slot>
          
          <div>

            <div>

            </div>
          </div>
        </div>

        <!-- <button
          type="button"
          class="counter"
          @click=${this._onClick}
          part="button"
        >
          Count is ${this.count}
        </button> -->

      </section>

      <div class="ticks"></div>

      <section id="next-steps">
        <div id="docs">

          <svg class='header-svg' viewBox="0 0 24 24"><title>square</title><path d="M3,3V21H21V3" /></svg>
          
          <h2 class='title-main' >FIGURAS GEOMETRICAS PLANAS</h2>
          
            <div class='square'>
              <svg class='figures-svg' viewBox="0 0 24 24"><title>square-outline</title><path d="M3,3H21V21H3V3M5,5V19H19V5H5Z" /></svg>

              <p class='title-figures' >CUADRADO</p>

              <form id='square-form' class='form-square'>
                
                <div>
                  <label>Ancho:</label>
                  <input type="number" name="ancho" id="input-square-width" class='input-form'/>

                  <label class=''>Largo:</label>
                  <input type="number" name="alto" id="input-square-height" class='input-form'/>

                  <button 
                    id='square-btn' 
                    class='counter' 
                    type="button"
                    @click=${this._onSquareClick}
                    >
                    CALCULAR</button>

                  <p>Ingrese valores ancho, Largo del cuadrado para calcular su área y perímetro.</p>

                </div>
              </form>

            </div>
            

          <!-- <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img class="logo" src=${viteLogo} alt="" />
                Explore Vite
              </a>
            </li>

            <li>
              <a href="https://lit.dev/" target="_blank">
                <img class="button-icon" src=${litLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul> -->

        </div>
        <div id="social">
          
          <svg class="header-svg" role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>disc</title><path d="M12,14C10.89,14 10,13.1 10,12C10,10.89 10.89,10 12,10C13.11,10 14,10.89 14,12A2,2 0 0,1 12,14M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" /></svg>
            <use href="/icons.svg#social-icon"></use>
          </svg>

          <h2 class='title-main' >FIGURAS GEOMETRICAS SOLIDAS</h2>

          
          
          

          <div class='square'>
              <svg class='figures-svg' viewBox="0 0 24 24"><title>cube</title><path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15Z" /></svg>

              <p class='title-figures' >CUBO</p>

              <form id='square-form' class='form-square'>
                
                <div>
                  <label>Ancho:</label>
                  <input type="number" name="ancho" id="input-square-width" class='input-form'/>

                  <label>Largo:</label>
                  <input type="number" name="largo" id="input-square-length" class='input-form'/>

                  <label class=''>Alto:</label>
                  <input type="number" name="alto" id="input-square-height" class='input-form'/>

                  <button 
                    id='square-btn' 
                    class='counter' 
                    type="button"
                    @click=${this._cubeClick}
                    >
                    CALCULAR</button>

                  <p>Ingrese valores ancho, largo y alto del cubo para calcular su volumen.</p>

                </div>
              </form>

            </div>

          
          <!-- <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg class="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg class="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg class="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg class="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul> -->

        </div>
      </section>

      <div class="ticks"></div>
      <section id="spacer"></section>
    `
  }

  // CODE

  private _onClick() {
    this.count++
  }

  private _onSquareClick() {
    const widthInput = this.shadowRoot?.getElementById('input-square-width') as HTMLInputElement;
    const heightInput = this.shadowRoot?.getElementById('input-square-height') as HTMLInputElement;

    const width = parseFloat(widthInput.value);
    const height = parseFloat(heightInput.value);

    if (!isNaN(width) && !isNaN(height)) {
      const area = width * height;
      alert(`El área del cuadrado es: ${area}`);
    } else {
      alert('Por favor, ingrese valores válidos para el ancho y el alto.');
    }
  }

  private _cubeClick() {
    const widthInput = this.shadowRoot?.getElementById('input-square-width') as HTMLInputElement;
    const lengthInput = this.shadowRoot?.getElementById('input-square-length') as HTMLInputElement;
    const heightInput = this.shadowRoot?.getElementById('input-square-height') as HTMLInputElement;

    const width = parseFloat(widthInput.value);
    const length = parseFloat(lengthInput.value);
    const height = parseFloat(heightInput.value);

    if (!isNaN(width) && !isNaN(length) && !isNaN(height)) {
      const volume = width * length * height;
      alert(`El volumen del cubo es: ${volume}`);
    } else {
      alert('Por favor, ingrese valores válidos para el ancho, largo y alto.');
    }
  }



  // STYLES

  static styles = css`
    
    :host {
      --text: #6b6375;
      --text-h: #08060d;
      --bg: #fff;
      --border: #e5e4e7;
      --code-bg: #f4f3ec;
      --accent: #aa3bff;
      --accent-bg: rgba(170, 59, 255, 0.1);
      --accent-border: rgba(170, 59, 255, 0.5);
      --social-bg: rgba(244, 243, 236, 0.5);
      --shadow:
        rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px;

      --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
      --heading: system-ui, 'Segoe UI', Roboto, sans-serif;
      --mono: ui-monospace, Consolas, monospace;

      font: 18px/145% var(--sans);
      letter-spacing: 0.18px;

      width: 1126px;
      max-width: 100%;
      margin: 0 auto;
      text-align: center;
      border-inline: 1px solid var(--border);
      min-height: 100svh;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      color: var(--text);
    }

    @media (prefers-color-scheme: dark) {
      :host {
        --text: #9ca3af;
        --text-h: #f3f4f6;
        --bg: #16171d;
        --border: #2e303a;
        --code-bg: #1f2028;
        --accent: #c084fc;
        --accent-bg: rgba(192, 132, 252, 0.15);
        --accent-border: rgba(192, 132, 252, 0.5);
        --social-bg: rgba(47, 48, 58, 0.5);
        --shadow:
          rgba(0, 0, 0, 0.4) 0 10px 15px -3px,
          rgba(0, 0, 0, 0.25) 0 4px 6px -2px;
      }

      #social .button-icon {
        filter: invert(1) brightness(2);
      }
    }

    h1,
    h2,
    ::slotted(h1),
    ::slotted(h2) {
      font-family: var(--heading);
      font-weight: 500;
      color: var(--text-h);
    }

    h1,
    ::slotted(h1) {
      font-size: 56px;
      letter-spacing: -1.68px;
      margin: 32px 0;
    }

    h2 {
      font-size: 24px;
      line-height: 118%;
      letter-spacing: -0.24px;
      margin: 0 0 8px;
    }

    p {
      margin: 0;
    }

    code {
      font-family: var(--mono);
      font-size: 15px;
      line-height: 135%;
      display: inline-flex;
      padding: 4px 8px;
      border-radius: 4px;
      color: var(--text-h);
      background: var(--code-bg);
    }

    .counter {
      font-family: var(--mono);
      font-size: 16px;
      display: inline-flex;
      padding: 5px 10px;
      border-radius: 5px;
      color: var(--accent);
      background: var(--accent-bg);
      border: 2px solid transparent;
      transition: border-color 0.3s;
      margin-bottom: 24px;
      cursor: pointer;
    }

    .counter:hover {
      border-color: var(--accent-border);
    }

    .counter:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }

    .hero {
      position: relative;
    }

    .hero .base,
    .hero .framework,
    .hero .vite {
      inset-inline: 0;
      margin: 0 auto;
    }

    .hero .base {
      width: 170px;
      position: relative;
      z-index: 0;
    }

    .hero .framework,
    .hero .vite {
      position: absolute;
    }

    .hero .framework {
      z-index: 1;
      top: 34px;
      height: 28px;
      transform: perspective(2000px) rotateZ(300deg) rotateX(44deg)
        rotateY(39deg) scale(1.4);
    }

    .hero .vite {
      z-index: 0;
      top: 107px;
      height: 26px;
      width: auto;
      color: var(--vite-logo);
      transform: perspective(2000px) rotateZ(300deg) rotateX(40deg)
        rotateY(39deg) scale(0.8);
    }

    #center {
      display: flex;
      flex-direction: column;
      gap: 25px;
      place-content: center;
      place-items: center;
      flex-grow: 1;
    }

    #next-steps {
      display: flex;
      border-top: 1px solid var(--border);
      text-align: left;
    }

    #next-steps > div {
      flex: 1 1 0;
      padding: 32px;
    }

    #next-steps .icon {
      margin-bottom: 16px;
      width: 22px;
      height: 22px;
    }

    #docs {
      border-right: 1px solid var(--border);
    }

    /* GEOMETRIC FIGURES */

    .header-svg {
      width: 30px;
      height: 30px;
      transition: transform 0.3s ease;
      fill: var(--accent);
      /* background-color: var(--accent-bg); */
    }

    .figures-svg {
      width: 120px;
      height: 120px;
      transition: transform 0.3s ease;
      fill: var(--accent);
      /* background-color: var(--accent-bg); */
    }

    .input-form {
      width: 50px;
      padding: 8px;
      margin: 5px;
      margin-right: 10px;
      border: 1px solid var(--border);
      border-radius: 4px;
    }

    .title-main {
      font-size: 28px;
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 30px;
    }

    .title-figures {
      font-size: 18px;
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    /* GEOMETRIC FIGURES */



    #next-steps ul {
      list-style: none;
      padding: 0;
      display: flex;
      gap: 8px;
      margin: 32px 0 0;
    }

    #next-steps ul .logo {
      height: 18px;
    }

    #next-steps ul .logo svg {
      height: 100%;
      width: auto;
    }

    #next-steps ul a {
      color: var(--text-h);
      font-size: 16px;
      border-radius: 6px;
      background: var(--social-bg);
      display: flex;
      padding: 6px 12px;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      transition: box-shadow 0.3s;
    }

    #next-steps ul a:hover {
      box-shadow: var(--shadow);
    }

    #next-steps ul .button-icon {
      height: 18px;
      width: 18px;
    }

    #spacer {
      height: 88px;
      border-top: 1px solid var(--border);
    }

    .ticks {
      position: relative;
      width: 100%;
    }

    .ticks::before,
    .ticks::after {
      content: '';
      position: absolute;
      top: -4.5px;
      border: 5px solid transparent;
    }

    .ticks::before {
      left: 0;
      border-left-color: var(--border);
    }

    .ticks::after {
      right: 0;
      border-right-color: var(--border);
    }

    @media (max-width: 1024px) {
      :host {
        font-size: 16px;
        width: 100%;
        max-width: 100%;
      }

      h1,
      ::slotted(h1) {
        font-size: 36px;
        margin: 20px 0;
      }

      h2,
      ::slotted(h2) {
        font-size: 20px;
      }

      #center {
        padding: 32px 20px 24px;
        gap: 18px;
      }

      #next-steps {
        flex-direction: column;
        text-align: center;
      }

      #next-steps > div {
        padding: 24px 20px;
      }

      #docs {
        border-right: none;
        border-bottom: 1px solid var(--border);
      }

      #next-steps ul {
        margin-top: 20px;
        flex-wrap: wrap;
        justify-content: center;
      }

      #next-steps ul li {
        flex: 1 1 calc(50% - 8px);
      }

      #next-steps ul a {
        width: 100%;
        justify-content: center;
        box-sizing: border-box;
      }

      #spacer {
        height: 48px;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
