import React from "react";
import Layout from "@theme/Layout";

export default function Home() {
    return (
        <Layout 
            title="Meu Site" 
            description="Bem-vindo ao meu site pessoal!"
            wrapperClassName="home"
        >
            <header className="home__header">
                <div className="container">
                    <div class="home__header__wrapper">
                        <div className="home__header__photo">
                            <picture className="home__header__photo__picture">
                                <img 
                                    src="https://github.com/enriqueprieto.png"
                                    className="home__header__photo__img"
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
                <section id="contact">
                    <header>
                        <h2>Como posso te ajudar?</h2>
                    </header>

                    <p>Será um prazer conhecer seu projeto e saber como posso contribuir. Fique a vontade para entrar em contato comigo por achar melhor, pode ser por Whatsapp e/ou E-mail, só utilizar os botões abaixo.</p>

                    <ul>
                        <li>
                            <a href="#">Whatsapp</a>
                        </li>
                        <li>
                            <a href="#">enriqueneto@gmail.com</a>
                        </li>
                    </ul>
                </section>
            </main>
        </Layout>
    );
}
