import ServiceList from "./ServiceList.jsx";
import SearchForm from "./SearchForm.jsx";
import SearchBottomRow from "./SearchBottomRow.jsx";

//Средний блок поиска - список сервисов, строка поиска Яндекса, текст под строкой поиска
function SearchBlock({serviceList, searchPicture, searchBottomData}) {
    return (
        <div>
            <div>
                <ServiceList serviceList={serviceList}/>
            </div>
            <div>
                <SearchForm img={searchPicture.img} title={searchPicture.title} url={searchPicture.url} />
            </div>
            <div>
                <SearchBottomRow url={searchBottomData.url} text={searchBottomData.text} />
            </div>
        </div>
    )
}

export default SearchBlock;