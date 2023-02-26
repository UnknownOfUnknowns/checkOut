import "./WhenDeliveryStyle.css"

interface WhenDeliveryProps {
    timeSelectionOn: boolean
}
function WhenDelivery({timeSelectionOn}: WhenDeliveryProps){

    return(
        <div className={"when-body"}>
            <h2>
                Hvornår skal den leveres?
            </h2>
            <div className={"input-containers"}>
                <input
                    className={"date-picker"}
                    type={"date"}
                    id={"start"}
                    name={"trip-start"}
                    min={"2018-01-01"}
                    max={"2018=12-31"}
                >

                </input>
                {
                    timeSelectionOn ?

                        <input
                            className={"time-picker"}
                            type="time"
                            id="appt"
                            name="appt"
                            min="10:00"
                            max="17:00" required
                        />
                    :
                        null
                }
            </div>
        </div>
    )

}

export default WhenDelivery
