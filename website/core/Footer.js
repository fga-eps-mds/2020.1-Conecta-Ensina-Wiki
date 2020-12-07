/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Documentos</h5>
            <a href={this.docUrl('roadmapDoProduto')}>
              Documentação do Projeto
            </a>
            <a href={this.docUrl('documentoDeVisao')}>
              Documentação do Produto
            </a>
            <a href={this.docUrl('planejamentoSprint0')}>
              Documentação das Sprints
            </a>
          </div>
          <div>
            <h5>Comunidade</h5>
            <a
              href={`${this.props.config.wikiRepoUrl}/issues`}
              target="_blank"
              rel="noreferrer noopener">
              Issues do projeto
            </a>
            <a href={this.docUrl('sobreNos')}>Sobre Nós</a>
          </div>
          <div>
            <h5>Mais</h5>
            <a href={this.props.config.wikiRepoUrl}>
              Repositório da nossa Wiki
            </a>
            <a href={this.props.config.backendRepoUrl}>
              Repositório da nossa API
            </a>
            <a href={this.props.config.mobileRepoUrl}>
              Repositório do nosso APP Mobile
            </a>
            <a
              className="github-button"
              href={this.props.config.wikiRepoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Favorite este projeto no GitHub">
              Star
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>

        <a
          href="https://opensource.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/oss_logo.png`}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
