import { useState } from "react";

import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import Prismic from "@prismicio/client";
import { getPrismicClient } from "../services/prismic";

// Components styles - MainContainer
import { MainContainer } from '../components/MainContainerStyles';

// Components styles - Card
import { CardContainer } from '../components/CardStyles';

// Components styles - Aside
import { AsideContainer } from '../components/AsideStyles';

// Components styles - Button
import { Button } from "../components/ButtonStyles";

// React-Icons
import { FaDiscord } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { SiTiktok } from 'react-icons/si';

type Posts = {
  id: string;
  uid: string;
  data: {
    title: {
      text: string;
    };
    thumbnail: {
      url: string;
    };
    content: {
      text: string;
    };
  }
}

export default function Home({ allEpisodes, postsPagination }) {
  const [posts, setPosts] = useState<Posts[]>(allEpisodes);
  const [nextPage, setNextPage] = useState(postsPagination);
  const [currentPage, setCurrentPage] = useState(1);

  async function handleNextPage() {
    if (currentPage !== 1 && nextPage === null) {
      return;
    }

    const postsResults = await fetch(`${nextPage}`).then(response =>
      response.json()
    );

    const newPosts = postsResults.results;

    setNextPage(postsResults.next_page);
    setCurrentPage(postsResults.page);
    setPosts([...posts, ...newPosts]);
  }

  return (
    <MainContainer>
    <section>
      {posts.map((post) => {
        return (
          <CardContainer key={post.id}>
            <Link href={`/posts/${post.uid}`}>
              <h2>{post.data.title[0].text}</h2>
            </Link>
            <Link href={`/posts/${post.uid}`}>
              <img
                src={`${post.data.thumbnail.url}`}
                alt={post.data.title[0].text}
              />
            </Link>
            <Link href={`/posts/${post.uid}`}>
              <p>{post.data.content[0].text.substr(0, 300)}...</p>
            </Link>
          </CardContainer>
        )
      })}

      <div className="buttonNextPageContainer">
        {nextPage && (
          <Button type="button" onClick={handleNextPage}>
            Carregar mais posts
          </Button>
        )}
      </div>
    </section>

    <AsideContainer>
      <h2>Acompanhe tambem...</h2>
      <div>
        <Link href="https://discord.com/invite/9WrEqqqchu">
          <a target="_blank"><FaDiscord className="discord" /></a>
        </Link>

        <Link href="https://www.instagram.com/gamesroom_news/">
          <a target="_blank"><AiFillInstagram className="instagram" /></a>
        </Link>

        <Link href="https://www.facebook.com/Games-Room-News-116963500309195">
          <a target="_blank"><AiFillFacebook  className="facebook" /></a>
        </Link>

        <Link href="https://www.tiktok.com/@gamesroomnews?lang=pt-BR">
          <a target="_blank"><SiTiktok className="tiktok" /></a>
        </Link>
      </div>
    </AsideContainer>
  </MainContainer>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postResponse = await prismic
    .query([Prismic.Predicates.at("document.type", "blog_pots")], {
      pageSize: 5,
      orderings: "[document.last_publication_date desc]",
    })
    .then((respostaEmObjeto) => respostaEmObjeto);

  const allEpisodes = postResponse.results;
  const postsPagination = postResponse.next_page;
  
  return {
    props: {
      allEpisodes,
      postsPagination,
    },
    revalidate: 1800,
  };
};
