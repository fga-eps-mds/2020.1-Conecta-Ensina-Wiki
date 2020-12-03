/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('documentoDeVisao')}>Documentação do projeto</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Conheça nosso reposiório da <a href="https://github.com/fga-eps-mds/2020.1-Conecta-Ensina-Backend">API</a>',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'API - Back-End',
          },
          {
            content: 'Conheça nosso reposiório do <a href="https://github.com/fga-eps-mds/2020.1-Conecta-Ensina-Backend">APP Mobile</a>',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'APP Mobile',
          },
        ]}
      </Block>
    );

    const ConectaWebsite = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Site da empresa</h2>
        <p>
          Aqui o
           <a href="https://www.conectaensina.com.br"> site oficial </a>
          da empresa, não trabalhado por nós no escopo da disciplina
        </p>
      </div>
    );

    const AboutConecta = () => (
      <Block id="aboutConecta" background="light">
        {[
          {
            content:
              'A Conecta-Ensina é uma empresa que oferece aulas particulares em domicílio. ' +
              'Ela atende desde o ensino fundamental ao ensino médio. Seu intuito é levar, ' +
              'para dentro das residências dos seus clientes, um ensino de qualidade e acessível.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Sobre a Conecta-Ensina',
          },
        ]}
      </Block>
    );

    const AboutProject = () => (
      <Block id="aboutProject">
        {[
          {
            content:
              'Este projeto visa automatizar o agendamento das aulas feitas atualmente apenas ' +
              'pelo website da empresa. Como pedido pelo cliente, desenvolvemos um aplicativo ' +
              'mobile, e uma API, para facilitar o cadastro, agendamentos, pagamentos etc dos ' +
              'interessados na plataforma, além da expansão no mercado.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Sobre o projeto',
          },
        ]}
      </Block>
    );

    const AboutUs = () => (
      <Block id="aboutUs" background="dark">
        {[
          {
            content:
              'A equipe foi formada nos âmbitos de duas disciplinas, contendo 3 membors de EPS ' +
              'e 6 membros de MDS, com a participação também do professor avaliador. Além disso' +
              ', contávamos com a participação de dois membros da Conecta-Ensina representando ' +
              'os interesses da empresa.',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Sobre os desenvolvedores',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Quem está usando este projeto?</h2>
          <p>Este projeto é usado pelas seguintes pessoas ou empresas</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              Mais usuários da {siteConfig.title}
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <ConectaWebsite />
          <AboutConecta />
          <AboutProject />
          <AboutUs />
        </div>
      </div>
    );
  }
}

module.exports = Index;
