import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Head from "next/head";
import Link from "next/link";

import Prismic from "@prismicio/client";
import { getPrismicClient } from "../../services/prismic";

import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { ImHome } from "react-icons/im";
import styles from "../../styles/pages/news.module.scss";

export default function news({ post }) {
  //TODO: Arumar post.content, (content.body) pegar o HTML de forma correta

  return (
    <div className={styles.news}>
      <Head>
        <title>{post.data.title[0].text} | GamesRoomNews</title>
      </Head>

      <div className={styles.returnHome}>
        <Link href="/">
          <p>
            <ImHome /> Voltar para Página Inicial
          </p>
        </Link>
      </div>

      <div className={styles.thumbnailContainer}>
        <img src={post.data.thumbnail.url} />
      </div>
      <header>
        <h1>{post.data.title[0].text}</h1>

        {post.data.content.map((content) => (
          <div className={styles.description} key={content.text}>
            {content.type == "paragraph" ? (
              <p>{content.text}</p>
            ) : content.type == "strong" ||
              "heading1" ||
              "heading2" ||
              "heading3" ||
              "heading4" ? (
              <h2>{content.text}</h2>
            ) : content.spans.type == "hyperlink" ? (
              <a href={content.spans.data.url}>{content.text}</a>
            ) : (
              <p>{content.text}</p>
            )}
          </div>
        ))}

        <span>Autor: {post.data.author[0].text}</span>
        <span>
          {format(parseISO(post.data.release_date), "dd-MM-yyyy", {
            locale: ptBR,
          })}
        </span>
        <span>
          <a target="_black" href={post.data.link_youtube.url}>
            Acesse nosso canal do YouTube!
          </a>
        </span>
      </header>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const postResponse = await prismic.query([
    Prismic.Predicates.at("document.type", "blog_pots"),
  ]);

  const paths = postResponse.results.map((post) => {
    return {
      params: {
        slug: post.uid,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = getPrismicClient();
  const { slug } = context.params;
  const post = await prismic.getByUID("blog_pots", String(slug), {});

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 8, // 8 hours
  };
};
