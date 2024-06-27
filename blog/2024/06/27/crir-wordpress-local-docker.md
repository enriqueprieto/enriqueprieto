# Como Criar um Container no Docker com WordPress + MySQL

Para quem trabalha com WordPress há um tempo, sabe que ter um ambiente de desenvolvimento local agiliza o desenvolvimento e muitas vezes o setup para fazer um WordPress funcionar pode ser desafiador.

Tanto em ambiente Linux quanto Windows, certas configurações de Apache, instalação de PHP e banco de dados são exigidas. Muitas vezes, optava-se por utilizar softwares como XAMPP, que criava um servidor local com PHP, MySQL e Apache.

A maioria dos problemas surgem principalmente na diferença entre o ambiente de desenvolvimento comparado ao host onde o WordPress será instalado. Levantando esses pontos, faz sentido termos uma forma de simular o mesmo ambiente que nosso site será rodado, e é aí que entra o Docker.

Sabemos também como é trabalhoso quando precisamos trabalhar em um tema ou plugin e temos que fazer todo um pre-setup para começar a trabalhar.

Neste artigo, quero compartilhar como você pode criar um container no Docker com o WordPress, Apache e MySQL. Vou explicar as etapas para rodar seu WordPress localmente, para que você possa fazer por conta própria e aprender como funciona. Também deixarei o repositório no meu GitHub para que você possa fazer um fork e suas alterações. Caso sentir no coração, pode dar uma estrelinha nele também.

Se quiser saber mais sobre cada ferramenta, pedi a ajuda do ChatGPT para dar um resumo, mas deixarei um link para cada ferramenta para que você possa buscar mais informações. Caso queira partir direto para o "vamos ver", clique aqui

## Antes de Começar

Como em todo projeto, existem tipos de dependências que são obrigatórias para o funcionamento do que irei compartilhar neste artigo.

As dependências são o **Docker** e o **Docker Compose**, ambas precisam ser instalada em sua máquina. Caso seu sistema operacional seja Linux, siga este tutorial. Caso seu sistema operacional seja Windows, siga este tutorial.

### Sobre as Ferramentas

**WordPress**
WordPress é um sistema de gerenciamento de conteúdo (CMS) de código aberto, amplamente utilizado para criar e gerenciar sites. Sua flexibilidade e extensibilidade permitem que desenvolvedores criem temas e plugins personalizados, adaptando o site às necessidades específicas dos usuários. Com uma grande comunidade de suporte, WordPress é a escolha ideal tanto para iniciantes quanto para desenvolvedores experientes.

**Apache** 
Apache HTTP Server, frequentemente referido como Apache, é um dos servidores web mais populares e utilizados no mundo. Ele é conhecido por sua robustez, flexibilidade e suporte extensivo para módulos, permitindo a personalização do servidor conforme as necessidades específicas do site. Apache é frequentemente utilizado em conjunto com outras tecnologias, como PHP, para hospedar aplicações web dinâmicas.

**MySQL** 
MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) que utiliza a linguagem SQL (Structured Query Language) para acessar e gerenciar os dados. É uma das escolhas mais populares para aplicações web devido à sua confiabilidade, desempenho e facilidade de uso. MySQL é frequentemente usado em conjunto com PHP e Apache no famoso stack LAMP (Linux, Apache, MySQL, PHP).

**Docker**
Docker é uma plataforma de código aberto que automatiza a implantação de aplicações dentro de containers de software, fornecendo uma camada adicional de abstração e automação de virtualização a nível de sistema operacional. Ele permite que desenvolvedores empacotem uma aplicação com todas as partes necessárias, como bibliotecas e outras dependências, e as distribuam como um único pacote. Isso garante que a aplicação funcione em qualquer ambiente que suporte Docker.

**Docker Compose** 
Docker Compose é uma ferramenta que permite definir e gerenciar aplicações multi-container no Docker. Com o Docker Compose, você pode usar um arquivo YAML para configurar os serviços da aplicação, redes e volumes. Isso facilita a configuração e o gerenciamento de ambientes de desenvolvimento e teste complexos, tornando mais simples a execução de múltiplos containers com uma única linha de comando.

## Hora da Verdade

### 1 - Criar o Diretório

Crie um diretório para seu projeto. No terminal, digite:

```sh
mkdir wordpress-local
cd wordpress-local
```

### 2 - Criar Dockerfile

Dentro do diretório criado, crie um arquivo chamado `Dockerfile` com o seguinte conteúdo:

```Dockerfile
# Usa a imagem oficial do WordPress com PHP 8
FROM wordpress:hp8.0-apache

# Configurações adicionais podem ser adicionadas aqui

```

### 3 - Criar docker-compose.yml

Ainda no mesmo diretório, crie um arquivo `docker-compose.yml` com o seguinte conteúdo:

```yaml
version: '3.8'

services:
  wordpress:
    image: wordpress:php8.0-apache
    ports:
      - "8000:80"
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
      WORDPRESS_DB_NAME: wordpress
    volumes:
      - ./wordpress:/var/www/html

  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress
      MYSQL_ROOT_PASSWORD: rootpassword
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
```

### 4 - Subir o Container

No terminal, no diretório onde estão os arquivos criados, digite:

```sh
docker-compose up -d
```

### 5 - Acessar

Abra o navegador e acesse `http://localhost:8080`. Você verá a tela de instalação do WordPress.

## Conclusão

Com essas etapas simples, você consegue configurar um ambiente local para desenvolver e testar seus projetos WordPress de forma rápida e eficiente, utilizando Docker e Docker Compose. Isso garante que seu ambiente de desenvolvimento seja o mais próximo possível do ambiente de produção, minimizando problemas e diferenças de configuração.

Se tiver alguma dúvida ou sugestão, sinta-se à vontade para deixar um comentário. E não se esqueça de visitar o repositório no GitHub para mais detalhes e futuras atualizações!

---

### Links Úteis

- [WordPress](https://wordpress.org)
- [Apache](https://httpd.apache.org)
- [MySQL](https://www.mysql.com)
- [Docker](https://www.docker.com)
- [Docker Compose](https://docs.docker.com/compose/)
