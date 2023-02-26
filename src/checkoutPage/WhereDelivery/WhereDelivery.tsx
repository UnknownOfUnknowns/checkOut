import "./WhereDeliveryStyle.css"
import React, {useState} from "react";
import {FaChurch, FaHospitalSymbol, FaHouseUser, FaStore,} from "react-icons/all";
import CategoriesCard from "../../generalComponents/CategoriesCard/CategoriesCard";


interface WhereDeliveryProps {
    selected: number
    setSelected: (newSelected: number) => void
}
function WhereDelivery({selected, setSelected} : WhereDeliveryProps){


    const categories = [

        {
            icon: <FaHouseUser/>,
            name: "Privat"
        },
        {
            icon: <FaChurch/>,
            name: "Kirke"
        },

        {
            icon: <FaStore/>,
            name: "Virksomhed"
        },

        {
            icon: <FaHospitalSymbol/>,
            name: "Hospital"
        }
    ]
    return(
        <div className={"delivery-body"}>
            <h2 className={"delivery-title"}>Hvor skal den leveres?</h2>
            <div className={"delivery-grid"}>
                {
                    categories.map((value, index, array) => (
                        <CategoriesCard
                            icon={value.icon}
                            category={value.name}
                            pressed={selected==index}
                            onClick={() => {setSelected(index)}}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default WhereDelivery
