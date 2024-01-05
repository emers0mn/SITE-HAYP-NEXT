"use client";

import React,{useEffect, useState} from "react";
import Api from "../../../service/Api";
import styles from'./avaliacoes.module.css';

const ComentPage = () => {

    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        async function Get(){
            if(reviews == null){
                await Api.get("/Web/GetGoogleComents")
                .then((response) => {
                        setReviews(response.data.result.reviews)
                    }).catch((err) =>{
                })
            }
        }
        Get()
    },[])

    return(
        <>
        <main className={styles.content}>
            <div className="container text-center">
                <div className={styles.header}>
                <img
                    src="./assets/images/google-logo.png"
                    alt="google"
                    className="img-fluid"
                />
                </div>
                {reviews ?
                reviews.map((item, key) => (
                 <div key={key} className={styles.comentarios}>

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
                <></>
                }
            </div>
            </main>
        </>
    )
}

export default ComentPage;