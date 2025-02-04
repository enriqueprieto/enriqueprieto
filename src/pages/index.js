import React from "react";
import Layout from "@theme/Layout";
import IconWhatsApp from '@site/static/img/icon-whatsapp.svg';
import IconEnvelope from '@site/static/img/icon-envelope.svg';

export default function Home() {
    return (
        <Layout 
            title="Meu Site" 
            description="Bem-vindo ao meu site pessoal!"
            wrapperClassName="home"
        >
            <header className="home__header">
                <div className="container">
                    <div className="home__header__wrapper">
                        <div className="home__header__photo">
                            <picture className="home__header__photo__picture">
                                <img 
                                    src="https://github.com/enriqueprieto.png"
                                    className="home__header__photo__img shadow--tl"
                                    loading="lazy"
                                />
                            </picture>
                        </div>

                        <div className="home__header__content">
                            <h1 className="home__header__title"><span className="is-welcome">Bem vindo</span> ao meu site</h1>

                            <p className="home__header__description">Me chamo <b>Enrique Prieto</b> eu trabalho com desenvolvimento de web desde 2012. Nesses 13 anos de jornada, já trabalhei com <b>agências de publicidade</b>, <b>projetos freelances</b>, <b>startups</b> e também fui cofundador de uma startup.</p>
                            
                            <a 
                                href="#contact"
                                className="button button--primary button--lg"
                            >
                                Entrar em contato
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section 
                    id="contact"
                    className="home__contact"
                >
                    <div className="container">
                        <header className="home__contact__header">
                            <h2 className="home__contact__header__title">Como posso te ajudar?</h2>

                            <p className="home__contact__header__description">
                                Será um prazer conhecer seu projeto e saber como posso contribuir. Fique a vontade para entrar em contato comigo por achar melhor, pode ser por Whatsapp e/ou E-mail, só utilizar os botões abaixo.
                            </p>
                        </header>

                        <ul className="home__contact__list">
                            <li className="home__contact__list__item">
                                <a 
                                    href="https://wa.me/5518996374612?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20pelo%20seu%20site"
                                    target="__blank"
                                    className="home__contact__link button button--outline button--primary button--block"
                                >
                                    <span className="home__contact__link__icon">
                                        <IconWhatsApp width={24} height={24}/>
                                    </span>

                                    Whatsapp
                                </a>
                            </li>
                            <li className="home__contact__list__item">
                                <a 
                                    href="mailto:enriqueneto@gmail.com"
                                    className="home__contact__link button button--outline button--primary button--block"
                                >
                                    <span className="home__contact__link__icon">
                                        <IconEnvelope width={24} height={24}/>
                                    </span>

                                    enriqueneto@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
