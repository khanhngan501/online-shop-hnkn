import { useEffect, useState } from "react"

function CardProduct( props:any ) {
    const { item } = props
    const [ open, setOpen ] = useState(false)

    const handleClickProd = (e:React.MouseEvent<HTMLAnchorElement>) => {
        if (window.innerWidth  < 640) {
            e.preventDefault()
            console.log("man hinh nho")
        } else {
            console.log("Man hinh lon")
        }
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth  < 640) {
                setOpen(false)
            } else {
                setOpen(true)
            }
        }
        // Attach the event listener to the window object
        window.addEventListener('resize', handleResize)
        window.addEventListener('resize', handleResize)
        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <a href="/" className="group shadow-cardShadow relative block overflow-hidden bg-white"
            onClick={handleClickProd}
        >
            <div className="max-sm:px-2">
                <img
                    src={item.img}
                    alt="anh san pham"
                    className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 max-sm:h-32"
                />
            </div>
            <div className="relative p-6 max-sm:p-2">
                {/* <span
                    className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"
                >
                    New
                </span> */}
                <h3 className="text-lg tracking-wide text-gray-900 max-sm:text-sm">{item.name}</h3>
                <p className="font-medium text-sm text-red-700 max-sm:mb-1">{item.price}$</p>
                {
                (open)?<div className="text-[#222] max-sm:text-xs max-sm:flex max-sm:flex-col max-sm:justify-around">
                    <div className="max-sm:mb-1">
                        <p className="max-sm:leading-5">Màn hình: {item.screen}</p>
                        <p className="max-sm:leading-5">CPU: {item.chip}</p>
                        <p className="max-sm:leading-5">Card: {item.graphic}</p>
                        <p className="max-sm:leading-5">Pin: {item.pin}</p>
                        <p className="max-sm:leading-5">Khối lượng: {item.weight} kg</p>
                    </div>
                    <div className="flex justify-around sm:hidden">
                        <button className="bg-green-300 font-medium rounded-md text-xs tracking-wide max-sm:px-2 max-sm:py-1">Chi tiết</button>
                        <button className="bg-blue-600 text-white font-medium rounded-md text-xs tracking-wide max-sm:px-2 max-sm:py-1">Mua</button>
                    </div>
                </div> : null
                }
                
                <div className="flex justify-center sm:hidden">
                    <a href="/"
                        className="text-blue-400 underline text-sm font-medium transition hover:scale-105 max-sm:p-1 max-sm:text-xs max-sm:font-normal"
                        onClick={(e)=>{
                            e.preventDefault()
                            setOpen(!open)
                        }}
                    >
                        {open ? "Hide": "Show more"}
                    </a>
                </div>
            </div>
        </a>
    )
}
export default CardProduct