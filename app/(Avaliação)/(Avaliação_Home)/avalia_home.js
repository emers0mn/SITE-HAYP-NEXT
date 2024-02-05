"use client";
import React, { useEffect, useState } from "react";
import Api from "../../../service/Api";
import styles from './avaliacoesHome.module.css';
import Image from "next/image";

const ComentPage = () => {

    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        async function Get() {
            if (reviews === null) {
                await Api.get("/Web/GetGoogleComents")
                    .then((response) => {
                        console.log(response)
                        setReviews(response.data.result.reviews)
                    }).catch((err) => {
                    })
            }
        }
        Get()
    }, [])

    return (
        <>
            <section className={styles.containerComentarios}>
                <div className="container">
                    

                        <div className={styles.headingTitle}>
                            <h2>Avaliação <br /> no Google</h2>
                            <div className={styles.divisor}></div>                        

                    </div>
                    <div className={styles.ContainerComentarios}>
                        {reviews ?
                            <div className={styles.mainComentarios}
                            >
                                {reviews.map((item, key) => (
                                    <div
                                        className={styles.comentarios}
                                        key={key}
                                    >
                                        <img
                                            className={styles.foto}
                                            alt="Clientes HAYP"
                                            src={item.profile_photo_url}
                                        />
                                        <div>
                                            <h5 className={styles.name}> {item.author_name}</h5>

                                            <div className={styles.contentStars}>
                                                <Image
                                                    width={100}
                                                    height={30}
                                                    alt="Avaliação dos clientes (vai de 1 a 5 estrelas)"
                                                    className={styles.stars}
                                                    src={"/img/star-8.png"}
                                                />
                                                <small>(5 estrelas)</small>
                                            </div>

                                        </div>
                                        <p className={styles.text}>
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            :
                            <></>
                        }
                    </div>
                </div>

            </section>
        </>
    )
}

export default ComentPage;