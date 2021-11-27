export default function SearchButton ({clickBtn}) {
    return (
        <div className="search-button-svg" onClick={clickBtn}>
            <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H37C41.4183 0 45 3.58172 45 8V32C45 36.4183 41.4183 40 37 40H0V0Z" fill="url(#paint0_linear)"/>
            <path d="M28.5303 20.5303C28.8232 20.2374 28.8232 19.7626 28.5303 19.4697L23.7574 14.6967C23.4645 14.4038 22.9896 14.4038 22.6967 14.6967C22.4038 14.9896 22.4038 15.4645 22.6967 15.7574L26.9393 20L22.6967 24.2426C22.4038 24.5355 22.4038 25.0104 22.6967 25.3033C22.9896 25.5962 23.4645 25.5962 23.7574 25.3033L28.5303 20.5303ZM16 20.75H28V19.25H16V20.75Z" fill="white"/>
            <defs>
            <linearGradient id="paint0_linear" x1="45" y1="0" x2="-1.32455e-07" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6748F6"/>
            <stop offset="0.473958" stopColor="#B33FE2"/>
            <stop offset="1" stopColor="#E8724A"/>
            </linearGradient>
            </defs>
            </svg>
        </div>
    )
}