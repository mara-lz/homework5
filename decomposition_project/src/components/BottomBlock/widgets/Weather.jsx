import WidgetBlock from "../WidgetBlock.jsx";

//Нижний блок - виджет погоды
function Weather({header,headerUrl,weatherDegrees}) {
    return (
        <WidgetBlock header={header} url={headerUrl}>
            <div>
                <div>
                    <img src={weatherDegrees.img} alt={weatherDegrees.title} title={weatherDegrees.title}/>
                </div>
                <div>
                   <h2>{weatherDegrees.degreesNow}</h2>
                </div>
                <div>
                    Утром {weatherDegrees.morningDegrees}, днём {weatherDegrees.eveningDegrees}
                </div>
            </div>
        </WidgetBlock>
    )
}

export default Weather;