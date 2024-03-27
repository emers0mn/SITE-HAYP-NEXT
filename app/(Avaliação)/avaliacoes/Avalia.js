"use client";

import React, { useEffect, useState } from "react";
import Api from "../../../service/Api";
import styles from './avaliacoes.module.css';
import LoadingSpinner from "@/components/spinner/LoadingSpinner";
import Link from "next/link";

const ComentPage = () => {

    const [reviews, setReviews] = useState(null);
    const [userRatingsTotal, setUserRatingsTotal] = useState(null);

    //  useEffect(() => {
    //      async function Get() {
    //          if (reviews == null) {
    //              await Api.get("/Web/GetGoogleComents")
    //                  .then((response) => {
    //                      setReviews(response.data.result.reviews)
    //                  }).catch((err) => {
    //                  })
    //          }
    //      }
    //      Get()
    //  }, [])


    //     useEffect(() => {
    //         async function Get() {
    //             if (userRatingsTotal == null) {
    //                 await Api.get("/Web/GetGoogleComents")
    //                     .then((response) => {
    //                         setUserRatingsTotal(response.data.result.user_ratings_total)
    //                     }).catch((err) => {
    //                     })
    //             }
    //         }
    //         Get()
    //     }, [])

    useEffect(() => {
        // Atualizar as avaliações a cada 30 dias
        const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
        const lastReviewsFetchDate = localStorage.getItem('lastReviewsFetchDate');
        const now = new Date();

        if (!lastReviewsFetchDate || now - new Date(lastReviewsFetchDate) >= thirtyDaysInMs) {
            getReviews();
            localStorage.setItem('lastReviewsFetchDate', now.toISOString());
        } else {
            const storedReviews = localStorage.getItem('reviews');
            if (storedReviews) {
                setReviews(JSON.parse(storedReviews));
            }
        }

        // Atualizar o total de avaliações a cada 48 horas
        const lastUserRatingsTotalFetchDate = localStorage.getItem('lastUserRatingsTotalFetchDate');
        const fortyEightHoursInMs = 48 * 60 * 60 * 1000;
        const fortyEightHoursAgo = new Date(now - fortyEightHoursInMs);

        if (!lastUserRatingsTotalFetchDate || new Date(lastUserRatingsTotalFetchDate) <= fortyEightHoursAgo) {
            getUserRatingsTotal();
            localStorage.setItem('lastUserRatingsTotalFetchDate', now.toISOString());
        } else {
            const storedUserRatingsTotal = localStorage.getItem('userRatingsTotal');
            if (storedUserRatingsTotal) {
                setUserRatingsTotal(JSON.parse(storedUserRatingsTotal));
            }
        }
    }, []);

    async function getReviews() {
        try {
            const response = await Api.get('/Web/GetGoogleComents');
            const fetchedReviews = response.data.result.reviews;
            setReviews(fetchedReviews);
            localStorage.setItem('reviews', JSON.stringify(fetchedReviews));
        } catch (error) {
            console.error('Erro ao buscar avaliações:', error);
        }
    }

    async function getUserRatingsTotal() {
        try {
            const response = await Api.get('/Web/GetGoogleComents');
            const fetchedUserRatingsTotal = response.data.result.user_ratings_total;
            setUserRatingsTotal(fetchedUserRatingsTotal);
            localStorage.setItem('userRatingsTotal', fetchedUserRatingsTotal);
        } catch (error) {
            console.error('Erro ao buscar total de avaliações:', error);
        }
    }

    return (
        <>
            {/* <main className={styles.content}>
            <div className="container text-center">
                <div className={styles.header}>
                <img
                    src="./assets/images/google-logo.png"
                    alt="google"
                    className="img-fluid"
                />
                </div>
                {reviews ?
                reviews.map((item) => (
                 <div key={item.key} className={styles.comentarios}>
                    
                    <div className={styles.containerAvaliacoes}>
                        <div className={styles.pessoas}>{item.author_name}:
                        <div className={styles.stars}>
                            <img src="./img/star-8.png" />
                        </div>
                        </div>

                        <div className="col-3 review-img text-right">
                        <div className="review-circle">
                            <img
                            src={item.profile_photo_url}
                            alt="Cliente que fez a avaliação"
                            className={styles.imgPessoas}
                            />
                        </div>
                        </div>
                    </div>
                    <div>
                        <p className="avaliacao">
                        {item.text}
                        
                        </p>
                    </div>
                </div>
                )) 
                :
                <LoadingSpinner/>
                }
            </div>
            </main> */}

            <main className={styles.Newcontent}>
                <div className={styles.contentdocontent}>
                    <div className={styles.Newheader}>
                        <div className={styles.Newgoogle}>
                            <img
                                className={styles.Google}
                                src="./assets/images/google-logo.png"
                                alt="google"
                            />

                            <button className={styles.btGoogle}><Link href={"https://www.google.com/maps/place/HAYP/@-23.7263319,-46.6862102,17z/data=!4m18!1m9!3m8!1s0x94ce4f1a16fe3451:0x2ceb01894481701d!2sHAYP!8m2!3d-23.7263319!4d-46.6862102!9m1!1b1!16s%2Fg%2F11fl0_w411!3m7!1s0x94ce4f1a16fe3451:0x2ceb01894481701d!8m2!3d-23.7263319!4d-46.6862102!9m1!1b1!16s%2Fg%2F11fl0_w411?entry=ttu"} target="_blank">Veja mais</Link></button>
                        </div>
                        <div className={styles.HeaderpersonaStars}>
                            <small>5.0</small>
                            <div className={styles.Newstars}>
                                <img src="./img/star-8.png" />
                            </div>
                            <p className={styles.Newavaliacoes}>({userRatingsTotal} avaliações)</p>
                        </div>
                    </div>
                    {reviews ?
                        reviews.map((item) => (
                            <div key={item.key} className={styles.Newcomentarios}>
                                <img
                                    className={styles.fotoPessoal}
                                    src={item.profile_photo_url}
                                    alt="Cliente que fez a avaliação"
                                />

                                <div>
                                    <h2>{item.author_name}</h2>

                                    <div className={styles.personaStars}>
                                        <small>{item.rating}.0</small>
                                        <div className={styles.Newstars}>
                                            <img src="./img/star-8.png" />
                                        </div>
                                        <small>{item.relative_time_description}</small>
                                    </div>
                                    <p className="avaliacao">
                                        {item.text}
                                    </p>
                                </div>

                            </div>
                        ))
                        :

                        <LoadingSpinner />
                    }
                </div>
            </main>
        </>
    )
}

export default ComentPage;