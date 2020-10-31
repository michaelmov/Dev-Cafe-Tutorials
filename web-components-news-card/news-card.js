const template = document.createElement('template');

template.innerHTML = `
  <style>
    .card {
      display: block;
      position: relative;
      font: inherit;
      background-color: #ffffff;
      border-radius: 5px;
      transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
      cursor: pointer;
      overflow: hidden;
    }

    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 30px 50px -17px rgba(0,0,0,.3), 0 3px 20px rgba(0,0,0,.1);
    }

    .card-inner {
      min-height: 180px;
      max-height: 180px;
      min-width: 400px;
      display: flex;
      align-items: stretch;
      height: 100%;
      width: 100%;
    }
    

    .img {
      width: 40%;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .content {
      padding: 1rem;
      width: 60%;
    }

    .title {
      font-size: 1.2rem;
      margin-top: 0;
      font-weight: 900;
    }
  </style>

  <article class="card">
    <div class="card-inner">
      <div class="img"></div>
      <div class="content">
        <h1 class="title"></h1>
        <p><slot /></p>
      </div>
    </div>
  </article>
`;
class NewsCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.render();
  }

  render() {
    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('title');

    this.shadowRoot.querySelector(
      '.img'
    ).style.backgroundImage = `url('${this.getAttribute('imageSrc')}')`;

    this.shadowRoot
      .querySelector('article')
      .addEventListener(
        'click',
        () => (document.location.href = this.getAttribute('href'))
      );
  }
}

window.customElements.define('news-card', NewsCard);
