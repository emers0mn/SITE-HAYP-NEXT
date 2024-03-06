import React, { useState } from "react";
import Api from "../../../service/Api"

export const PlanService = () => {

    const [plans, setPlans] = useState([])

    const handlePlans = async (takeCount) => {
        await Api.get("Web/GetPlans/" + takeCount)
        .then((response) =>{
            setPlans(response.data);
        })
        .catch((err) => {

        });
    }

    const handleRelevantPlans = async () => {
        await Api.get("Web/GetPlans/" + "4")
        .then((response) =>{
            setPlans(response.data);
        })
        .catch((err) => {

        });
    }

    return{
        plans,
        handlePlans,
        handleRelevantPlans
    }
}