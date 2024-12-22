import './App.css'
import TopBlock from "./components/TopBlock/TopBlock.jsx";
import SearchBlock from "./components/SearchBlock/SearchBlock.jsx";
import Banner from "./components/Banner.jsx";
import BottomBlock from "./components/BottomBlock/BottomBlock.jsx";

const testData={
    topBlock:{
        topUrlList:{
            url1:"https://ya.ru/",
            textUrl1:"Сейчас в СМИ",
            url2:"https://ya.ru/",
            textUrl2:"В Германии",
            url3:"https://ya.ru/",
            textUrl3:"Рекомендуем",
            date:new Date()
        },
        newsList:[
            {
                img:"image/image1.png",
                title:"Новость номер 1",
                url:"https://ya.ru/",
                body:"Новость номер 1"
            },
            {
                img:"image/image2.png",
                title:"Новость номер 2",
                url:"https://ya.ru/",
                body:"Новость номер 2"
            },
            {
                img:"image/image3.png",
                title:"Новость номер 2",
                url:"https://ya.ru/",
                body:"Новость номер 2"
            }
        ],
        courseList:[
            {
                nameIndex:"USD",
                price:"63,52",
                difference:"+1%"
            },
            {
                nameIndex:"EUR",
                price:"70,86",
                difference:"+2%"
            },
            {
                nameIndex:"НЕФТЬ",
                price:"64,90",
                difference:"+3%"
            },
        ],
        dataRightBlock:{
            img:"image/work.png",
            title:"Ссылка",
            url:"https://ya.ru/"
        }
    },
    searchBlock:{
        serviceList:[
            {
                url: "https://ya.ru/",
                text: "Видео"
            },
            {
                url: "https://ya.ru/",
                text: "Картинки"
            },
            {
                url: "https://ya.ru/",
                text: "Новости"
            },
            {
                url: "https://ya.ru/",
                text: "Карты"
            },
            {
                url: "https://ya.ru/",
                text: "Маркет"
            },
            {
                url: "https://ya.ru/",
                text: "Переводчик"
            },
            {
                url: "https://ya.ru/",
                text: "ещё"
            }
        ],
        searchBottomData:{
            url: "https://ya.ru/",
            text: "фаза луны сегодня"
        },
        searchPicture:{
            img:"image/yandex.png",
            title:"Яндекс",
            url:"https://ya.ru/"
        }
    },
    banner:{
        img:"image/banner.png",
        title:"Яндекс",
        url:"https://ya.ru/"
    },
    bottomBlock: {
        broadcastData: {
            header: "Эфир",
            url: "https://ya.ru/",
            broadcastList: [
                {
                    img: "image/broadcast.png",
                    title: "Управление как искусство",
                    url:"https://ya.ru/",
                    mainHeader: "Управление как искусство",
                    addHeader: "Успех"
                },
                {
                    img: "image/broadcast.png",
                    title: "Ночь. Мир в это время",
                    url:"https://ya.ru/",
                    mainHeader: "Ночь. Мир в это время",
                    addHeader: "earthTV"
                },
                {
                    img: "image/broadcast.png",
                    title: "Андрей Вознесенский",
                    url:"https://ya.ru/",
                    mainHeader: "Андрей Вознесенский",
                    addHeader: "Совершенно секретно"
                }
            ]
        },
        mapData:{
            header: "Карта Германии",
            url: "https://ya.ru/",
            mapList:[
                {
                    url:"https://ya.ru/",
                    mainHeader: "Расписания"
                },
                {
                    url:"https://ya.ru/",
                    mainHeader: "Места"
                }
            ]
        },
        programmData: {
            header: "Телепрограмма",
            url: "https://ya.ru/",
            programmList: [
                {
                    time: "15:00",
                    url: "https://ya.ru/",
                    mainHeader: "Джунгли",
                    addHeader: "Карусель ТВ"
                },
                {
                    time: "16:00",
                    url: "https://ya.ru/",
                    mainHeader: "Наедине со всеми",
                    addHeader: "Первый"
                },
                {
                    time: "16:10",
                    url: "https://ya.ru/",
                    mainHeader: "Друзья",
                    addHeader: "Мир ТВ"
                }
            ]
        },
        visitData:{
            header: "Посещаемое",
            url: "https://ya.ru/",
            visitList:[
                {
                    mainHeader: "Недвижимость",
                    addHeader: " - о сталинках",
                    url: "https://ya.ru/",
                },
                {
                    mainHeader: "Маркет",
                    addHeader: " - люстры",
                    url: "https://ya.ru/",
                },
                {
                    mainHeader: "Авто.ру",
                    addHeader: " - привод 4х4",
                    url: "https://ya.ru/"
                }
            ]
        },
        weatherData:{
            header: "Погода",
            url: "https://ya.ru/",
            weatherDegrees:{
                img:"image/weather.png",
                title:"погода",
                degreesNow:"+17",
                morningDegrees:"+17",
                eveningDegrees:"+20"
            }
        }
    }
}

function App() {
    return (
        <div>
            <TopBlock topUrlList={testData.topBlock.topUrlList}
                      newsList={testData.topBlock.newsList}
                      courseList={testData.topBlock.courseList}
                      dataRightBlock={testData.topBlock.dataRightBlock}/>
            <SearchBlock
                serviceList={testData.searchBlock.serviceList}
                searchBottomData={testData.searchBlock.searchBottomData}
                searchPicture={testData.searchBlock.searchPicture}/>
            <Banner img={testData.banner.img}
                    title={testData.banner.title}
                    url={testData.banner.url}/>
            <BottomBlock bottomBlockData={testData.bottomBlock}/>
        </div>
    )
}

export default App
