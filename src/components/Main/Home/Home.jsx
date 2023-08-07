import React from "react";
import styles from "./Home.module.css";
import { buscaFilmesEmLancamento } from "../../../api";
import useFetch from "../../../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";

import { register } from "swiper/element/bundle";
import "swiper/css";
import SliderHome from "./SliderHome";
register();

import "swiper/css";
import "swiper/css/pagination";
import SlideItem from "../../Helper/SlideItem";

// Homepage do site
const Home = () => {
  const { data, request } = useFetch();
  const [slidesPerView, setSlidesPerView] = React.useState(4.3);

  // Ao entrar na página, um request será feito e atualizara os dados dos filmes.
  React.useEffect(() => {
    async function fetchMovies() {
      const { url } = buscaFilmesEmLancamento(1);
      // Ao chamar o request, data é atualizado com o resultado da requisição.
      request(url);
    }

    fetchMovies();
  }, [request]);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1700) {
        setSlidesPerView(3.7);
      }
      if (window.innerWidth < 1500) {
        setSlidesPerView(3.2);
      }

      if (window.innerWidth < 1300) {
        setSlidesPerView(2.4);
      }

      if (window.innerWidth < 1000) {
        setSlidesPerView(2.2);
      }

      if (window.innerWidth < 768) {
        setSlidesPerView(2.7);
      }

      if (window.innerWidth < 648) {
        setSlidesPerView(1.4);
      }

      if (window.innerWidth < 500) {
        setSlidesPerView(1.1);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      {data ? (
        <div className={styles.carousel}>
          <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
            {data.results.map((movie) => {
              return (
                <SwiperSlide key={movie.id}>
                  <SliderHome data={movie} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : null}

      <div className={styles.text}>
        <h1 className={styles.logo}>
          <span className={styles.red}>Play</span>Portal
        </h1>
        <h2 className={styles.title}>A melhor plataforma para fãs de cinema</h2>
      </div>

      {data ? (
        <>
          <div className={styles.carousel}>
            <Swiper slidesPerView={slidesPerView} navigation>
              {data.results.map((movie) => {
                return (
                  <SwiperSlide key={movie.id}>
                    <SlideItem data={movie} type={"filme"} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className={styles.boxShadow}></div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Home;
