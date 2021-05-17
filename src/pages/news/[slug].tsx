import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Head from "next/head";
import Link from "next/link";

import { RichText, RichTextBlock } from "prismic-reactjs";
import Prismic from "@prismicio/client";
import { getPrismicClient } from "../../services/prismic";

import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { ImHome } from "react-icons/im";
import { MdDateRange } from "react-icons/md";
import { BiUser } from "react-icons/bi";

import styles from "../../styles/pages/news.module.scss";

export default function news({ post }) {
  return (
    <>
      <Head>
        <title>{post.data.title[0].text} | GamesRoomNews</title>

        <meta property="og:title" content={post.data.title[0].text} />
        <meta property="og:site_name" content="Games Room News" />
        <meta
          property="og:description"
          content="Venha para o lado gamer da força | Games Room News."
        />
        <meta
          property="og:url"
          content={`https://gamesroomnews.vercel.app/news/${post.uid}`}
        />
        <meta property="og:image" content={post.data.thumbnail.url} />
        <meta property="og:image:type" content="image/png" />
      </Head>

      <article className={styles.news}>
        <div className={styles.returnHome}>
          <Link href="/">
            <p>
              <ImHome /> Voltar para Página Inicial
            </p>
          </Link>
        </div>
        <div className={styles.thumbnailContainer}>
          <img
            src={`${post.data.thumbnail.url}`}
            alt={post.data.title[0].text}
          />
        </div>
        <div className={styles.cardPost}>
          <header>
            <h1>{post.data.title[0].text}</h1>
          </header>

          <div className={styles.borderDiv} />

          <main>
            <div className={styles.description}>
              {RichText.render(post.data.content)}
            </div>
          </main>
          <footer>
            <span>
              <MdDateRange />
              {format(parseISO(post.data.release_date), "dd-MM-yyyy", {
                locale: ptBR,
              })}
            </span>
            <span>
              <BiUser /> {post.data.author[0].text}
            </span>
          </footer>
        </div>
      </article>
    </>
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

  console.log(post);

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 8, // 8 hours
  };
};
