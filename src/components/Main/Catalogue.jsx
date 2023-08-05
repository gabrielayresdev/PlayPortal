import React from "react";
import styles from "./Catalogue.module.css";
import Button from "../Helper/Button";
import useFetch from "../../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideItem from "../Helper/SlideItem";
import ShowsFeed from "./ShowsFeed";

const Catalogue = ({ content, slideApi, catalogueApi }) => {
  const [pages, setPages] = React.useState([1]);
  const { error, loading, data, request } = useFetch();
  const [slidesPerView, setSlidesPerView] = React.useState(4.3);

  // Ao entrar na página, um request será feito e atualizara os dados dos filmes.
  React.useEffect(() => {
    async function fetchMovies() {
      const { url } = slideApi(1);
      // Ao chamar o request, data é atualizado com o resultado da requisição.
      request(url);
    }

    fetchMovies();
  }, [request, catalogueApi]);

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
    <div>
      <>
        {data ? (
          <>
            <h1 className={styles.title}>Em cartaz</h1>
            <div className={styles.carousel}>
              <Swiper
                slidesPerView={slidesPerView}
                pagination={{ clickable: true }}
                navigation
              >
                {data.results.map((movie) => {
                  return (
                    <SwiperSlide key={movie.id}>
                      <SlideItem data={movie} type={"FIlme"} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className={styles.boxShadow}></div>
            </div>
          </>
        ) : null}

        <div>
          <h1 className={styles.title}>{content.title}</h1>

          {/* Utilizar Componentes com os filmes permite que ao apertar o botão carregar mais, os filmes já carregados não sejam recarregados. */}
          <div>
            {pages.map((page) => {
              return (
                <ShowsFeed
                  key={page}
                  page={page}
                  api={catalogueApi}
                  type={content.type}
                  params={[page, 1000]}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.button_container}>
          <Button
            handleClick={() => setPages((page) => [...page, page.length + 1])}
          >
            Carregar mais
          </Button>
        </div>
      </>
    </div>
  );
};

export default Catalogue;
