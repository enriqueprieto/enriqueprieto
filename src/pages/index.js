import React from "react";
import Layout from "@theme/Layout";

export default function Home() {
    return (
        <Layout title="Meu Site" description="Bem-vindo ao meu site pessoal!">
            <main style={{ textAlign: "center", padding: "2rem" }}>
                <h1>Olá, eu sou [Seu Nome]</h1>
                <p>Desenvolvedor | Criador de Conteúdo | [Outras Descrições]</p>
                <a href="/blog">Acesse meu Blog</a>
            </main>
        </Layout>
    );
}
