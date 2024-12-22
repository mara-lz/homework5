//Большой баннер под строкой поиска
function Banner({ img, title, url }) {
    return (
        <div>
            <a href={url} target="_blank">
                <img src={img} alt={title} title={title}/>
            </a>
        </div>
    )
}

export default Banner;