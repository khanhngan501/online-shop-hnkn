import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function CardProduct( props:any ) {
    const { item } = props
    const [ open, setOpen ] = useState(false)
    const nav = useNavigate()

    const handleClickProd = (e:React.MouseEvent<HTMLAnchorElement>) => {
        if (window.innerWidth  < 640) {
            e.preventDefault()
        } else {
            nav('/product/1223')
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
        <div className="group hover:cursor-pointer shadow-cardShadow relative block overflow-hidden bg-white"
            onClick={handleClickProd}
        >
            <div className="max-sm:px-2">
                <img
                    src={item.img}
                    alt="anh san pham"
                    className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 max-sm:h-32"
                />
            </div>
            <div className="text-xs pl-2 w-full mb-2 sm:mb-0 sm:pl-6">
                <span className="border-[1.5px] p-1 rounded-sm">RAM {item.ram}</span>
                <span className="border-[1.5px] p-1 rounded-sm sm:ml-2">{item.storage}</span>
            </div>
            <div className="relative p-6 max-sm:p-2">
                {/* <span
                    className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"
                >
                    New
                </span> */}
                <h3 className="text-lg tracking-wide text-gray-900 max-sm:text-sm sm:font-medium sm:mb-2">{item.name}</h3>
                <p className="font-medium text-sm text-red-700 max-sm:mb-1">{item.price}$</p>
                {
                (open)?<div className="text-[#222] max-sm:text-xs max-sm:flex max-sm:flex-col max-sm:justify-around sm:text-[14px]">
                    <div className="max-sm:mb-1">
                        <p className="max-sm:leading-5">Màn hình: {item.screen}</p>
                        <p className="max-sm:leading-5">CPU: {item.chip}</p>
                        <p className="max-sm:leading-5">Card: {item.graphic}</p>
                        <p className="max-sm:leading-5">Pin: {item.pin}</p>
                        <p className="max-sm:leading-5">Khối lượng: {item.weight} kg</p>
                    </div>
                    <div className="flex justify-around sm:hidden">
                        <button className="bg-green-300 font-medium rounded-md text-xs tracking-wide max-sm:px-2 max-sm:py-1" onClick={()=>nav('/product/123')}>
                            Chi tiết
                        </button>
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
        </div>
    )
}
export default CardProduct