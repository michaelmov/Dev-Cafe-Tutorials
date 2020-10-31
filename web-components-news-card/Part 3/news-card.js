export default class NewsCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
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
          width: 100%;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 50px -17px rgba(0,0,0,.3), 0 3px 20px rgba(0,0,0,.1);
        }

        .card-inner {
          display: flex;
          align-items: stretch;
          min-height: 180px;
          max-height: 180px;
          min-width: 400px;
          height: 100%;
          width: 100%;
        }
        
        .img {
          width: 40%;
          object-fit: cover;
        }

        .content {
          padding: 1rem;
          width: 60%;
        }

        .content p {
          display: -webkit-box;
          -webkit-line-clamp: 3; /* number of lines to show */
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .title {
          font-size: 1.2rem;
          margin-top: 0;
          font-weight: 900;
          display: -webkit-box;
          -webkit-line-clamp: 2; /* number of lines to show */
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>

      <article class="card">
        <div class="card-inner">
          <img src="${this.getAttribute('imageSrc')}" class="img" />
          <div class="content">
            <h1 class="title">${this.getAttribute('title')}</h1>
            <p><slot /></p>
          </div>
        </div>
      </article>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot
      .querySelector('article')
      .addEventListener(
        'click',
        () => (document.location.href = this.getAttribute('href'))
      );
  }
}

window.customElements.define('news-card', NewsCard);
