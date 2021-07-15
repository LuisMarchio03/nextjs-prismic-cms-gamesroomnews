import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Prismic from "@prismicio/client";
import { getPrismicClient } from "../services/prismic";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "../styles/pages/home.module.scss";
export default function Home({ latestEpisodes, allEpisodes }) {
  return (
    <>
      <div className={styles.HomeContainer}>
        <Head>
          <title>Home | GamesRoomNews</title>
        </Head>
        <section className={styles.latestNews}>
          <strong>Últimos posts</strong>
          <div className={styles.flex}>
            {latestEpisodes.map((post) => (
              <div className={styles.latestCard} key={post.id}>
                <Link href={`/news/${post.uid}`}>
                  <img
                    src={`${post.data.thumbnail.url}`}
                    alt={post.data.title[0].text}
                  />
                </Link>
                <Link href={`/news/${post.uid}`}>
                  <h2>
                    {post.data.title[0].text} -{" "}
                    {format(parseISO(post.data.release_date), "dd/MM/yyyy", {
                      locale: ptBR,
                    })}
                  </h2>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <div className={styles.divisorBorder}></div>
        <section className={styles.allNews}>
          <div className={styles.alignStongs}>
            <strong>Todos os posts</strong>
          </div>
          {allEpisodes.map((post) => (
            <div className={styles.allCard} key={post.id}>
              <Link href={`/news/${post.uid}`}>
                <img
                  src={`${post.data.thumbnail.url}`}
                  alt={post.data.title[0].text}
                />
              </Link>
              <div>
                <Link href={`/news/${post.uid}`}>
                  <h2>
                    {post.data.title[0].text} -{" "}
                    {format(parseISO(post.data.release_date), "dd/MM/yyyy", {
                      locale: ptBR,
                    })}
                  </h2>
                </Link>
                <Link href={`/news/${post.uid}`}>
                  <p>{post.data.content[0].text.substr(0, 300)}...</p>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postResponse = await prismic
    .query([Prismic.Predicates.at("document.type", "blog_pots")], {
      pageSize: 20,
      orderings: "[document.last_publication_date desc]",
    })
    .then((respostaEmObjeto) => respostaEmObjeto);
  const latestEpisodes = postResponse.results.slice(0, 2);
  const allEpisodes = postResponse.results.slice(2, 100);
  return {
    props: {
      latestEpisodes,
      allEpisodes,
    },
    revalidate: 1800,
  };
};
