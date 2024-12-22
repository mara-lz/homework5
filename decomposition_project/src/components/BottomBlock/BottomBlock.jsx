import Broadcast from "./widgets/Broadcast.jsx";
import Map from "./widgets/Map.jsx";
import Programm from "./widgets/Programm.jsx";
import Visit from "./widgets/Visit.jsx";
import Weather from "./widgets/Weather.jsx";

//Нижний блок - Набор разных виджетов
function BottomBlock({bottomBlockData}) {
    const {broadcastData,mapData,programmData,visitData,weatherData}=bottomBlockData;
    return (
        <div>
            <div>
                <Weather header={weatherData.header} headerUrl={weatherData.url} weatherDegrees={weatherData.weatherDegrees}/>
            </div>
            <div>
                <Visit header={visitData.header} url={visitData.url} visitList={visitData.visitList}/>
            </div>
            <div>
                <Map header={mapData.header} url={mapData.url} mapList={mapData.mapList}/>
            </div>
            <div>
                <Programm header={programmData.header} url={programmData.url} programmList={programmData.programmList}/>
            </div>
            <div>
                <Broadcast header={broadcastData.header} url={broadcastData.url} broadcastList={broadcastData.broadcastList}/>
            </div>
        </div>
    )
}

export default BottomBlock;