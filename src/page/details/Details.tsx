import { useState } from "react"
import Header from "../../components/header/Header"

const images = [
    "https://cdn.tgdd.vn/Products/Images/44/282827/Slider/vi-vn-apple-macbook-air-m2-2022-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/44/282827/Slider/vi-vn-apple-macbook-air-m2-2022-2.jpg",
    "https://cdn.tgdd.vn/Products/Images/44/282827/Slider/vi-vn-apple-macbook-air-m2-2022-3.jpg",
    "https://cdn.tgdd.vn/Products/Images/44/282827/Slider/vi-vn-apple-macbook-air-m2-2022-5.jpg",
    "https://cdn.tgdd.vn/Products/Images/44/282827/Slider/vi-vn-apple-macbook-air-m2-2022-6.jpg",
    "https://cdn.tgdd.vn/Products/Images/44/282827/Slider/vi-vn-apple-macbook-air-m2-2022-7.jpg",
    "https://cdn.tgdd.vn/Products/Images/44/282827/Slider/vi-vn-apple-macbook-air-m2-2022-8.jpg",
    "https://cdn.tgdd.vn/Products/Images/44/282827/Slider/vi-vn-apple-macbook-air-m2-2022-9.jpg"
]
function Details() {
    const [ backgroundControl, setBackgroundControl ] = useState<string>("bg-[#dacfcf82] text-[#302f2f50]")
    const [ currentImg, setCurrentImg ] = useState<number>(0)
    return (
        <section className="bg-white">
            <Header />
            {/* Name product */}
            <div className="text-sm font-medium tracking-wide leading-5 mb-4">
                <h2>Laptop Apple MacBook Air 13 inch M2 2022 8-core CPU/8GB/256GB/8-core GPU (MLXY3SA/A)</h2>
            </div>
            {/* Section for specifications product */}
            <div className="border-t-[1px] border-t-gray-200 py-4">
                {/* Options to selected */}
                <div className="text-sm flex justify-around mb-4">
                    <div className={`px-4 py-2 border-2 w-fit`}>
                        <span>Bạc</span>
                    </div>
                    <div className={`px-4 py-2 border-2 w-fit`}>
                        <span>Xám</span>
                    </div>
                    <div className={`px-4 py-2 border-2 w-fit`}>
                        <span>Xanh đen</span>
                    </div>
                    <div className={`px-4 py-2 border-2 w-fit`}>
                        <span>Vàng</span>
                    </div>
                </div>
                {/* Carousel/Slider images */}
                <div className="relative w-full mb-4"
                    onMouseOver={()=>{
                        setBackgroundControl("bg-white text-[#1d1c1c89]")
                    }}
                    onMouseLeave={()=>{
                        setBackgroundControl("bg-[#dacfcf82] text-[#302f2f50]")
                    }}
                >
                    {/* Images */}
                    <div className="transition-opacity">
                        <img src={images[currentImg]} alt="anh" />
                    </div>
                    {/* Control button */}
                    <div className="w-full absolute translate-y-[calc(-3.5rem_/_2)] top-1/2 flex justify-between">
                        {/* Left control */}
                        <button className={`${backgroundControl} w-6 h-14 select-none text-3xl rounded-r-lg shadow-cardShadow ${(currentImg === 0)?"invisible" : ""}`}
                            onClick={() => {
                                if (currentImg > 0) {
                                    
                                    setCurrentImg(old => old - 1)
                                }
                            }}
                        >&#10094;</button>
                        {/* Right control */}
                        <button className={`${backgroundControl} w-6 h-14 select-none text-3xl rounded-l-lg shadow-cardShadow ${(currentImg === images.length - 1)?"invisible" : ""}`}
                            onClick={() => {
                                if (currentImg < images.length - 1) {
                                    
                                    setCurrentImg(old => old + 1)
                                }
                            }}
                        >&#10095;</button>
                    </div>
                </div>
                {/* OVerview product */}
                <div className="flex flex-col items-center mb-4 px-1">
                    <div className="mb-3">
                        <h3 className="font-medium">Thông tin sản phẩm</h3>
                        <p className="font-medium mb-2">Sau 14 năm, ba lần sửa đổi và hai kiến trúc bộ vi xử lý khác nhau, kiểu dáng mỏng dần mang tính biểu tượng của MacBook Air đã đi vào lịch sử. Thay vào đó là một chiếc MacBook Air M2 với thiết kế hoàn toàn mới, độ dày không thay đổi tương tự như MacBook Pro, đánh bật mọi rào cản với con chip Apple M2 đầy mạnh mẽ.</p>
                        <p className="text-sm">Sự đẳng cấp đến từ ngoại hình của chiếc MacBook Air nhà Apple là điều không thể phủ nhận và khó có dòng sản phẩm cùng phân khúc nào có thể qua mặt được. Vẫn là lớp vỏ kim loại nguyên khối cứng cáp cùng các cạnh góc vuông vức, sang trọng nhưng chiếc MacBook Air 2022 năm nay đã thoát ra khỏi ngôn ngữ thiết kế nhẹ nhàng vốn có từ lâu và khoác lên diện mạo mới tương tự như “đàn anh” MacBook Pro.</p>
                    </div>
                    <div className="flex items-center rounded-md cursor-pointer justify-center border-[1px] border-sky-500 text-sky-500 w-[200px] text-sm py-1 gap-3">
                        <span>Xem thêm</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                {/* Parameters */}
                <div className="items-center px-1 flex flex-col text-sm mb-4">
                    <div className="min-w-full font-medium mb-2">
                        <span className="text-left">Thông số kỹ thuật</span>
                    </div>
                    <ul className="parameters-prod mb-2">
                        <li className="grid grid-cols-2 p-1">
                            <p>CPU:</p>
                            <p className="text-left">Apple, M2100GB/s</p>
                        </li>
                        <li className="grid grid-cols-2 p-1">
                            <p>RAM:</p>
                            <p className="text-left">8 GB</p>
                        </li>
                        <li className="grid grid-cols-2 p-1">
                            <p>Ổ cứng:</p>
                            <p className="text-left">256 GB SSD</p>
                        </li>
                        <li className="grid grid-cols-2 p-1">
                            <p>Màn hình:</p>
                            <p className="text-left">13.6", Liquid Retina (2560 x 1664)</p>
                        </li>
                        <li className="grid grid-cols-2 p-1">
                            <p>Cổng kết nối:</p>
                            <p className="text-left">2 x Thunderbolt 3, Jack tai nghe 3.5 mm, MagSafe 3</p>
                        </li>
                        <li className="grid grid-cols-2 p-1">
                            <p>Hệ điều hành:</p>
                            <p className="text-left">Mac OS</p>
                        </li>
                    </ul>
                    <div className="flex items-center rounded-md cursor-pointer justify-center border-[1px] border-sky-500 text-sky-500 w-[200px] text-sm py-1 gap-3">
                        <span>Xem thêm chi tiết</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                {/* Actions button */}
                <div className="flex justify-around">
                    <button type="button" className="uppercase rounded-md tracking-wide bg-sky-700 py-2 px-5 text-sm font-medium text-white">Thêm vào Cart</button>
                    <button type="button" className="uppercase rounded-md tracking-wide bg-orange-700 py-2 px-5 text-sm font-medium text-white">Mua ngay</button>
                </div>
            </div>
            {/* Section for review product */}
            {/* Comment/discussion */}
            <div className="border-[1px] rounded-md mb-4 px-2">
                {/* Writing new comment */}
                <div className="text-sm border-b-[1px] border-b-gray-500 mb-4">
                    <h3 className="font-medium text-base mb-2">Bình luận</h3>
                    <textarea name="comment" id="" 
                        placeholder="Mời bạn bình luận hoặc đặt câu hỏi" 
                        className="rounded-md w-full border-[1.2px] border-gray-400 p-2 mb-2"
                    />
                </div>
                {/* Before discussions */}
                <div className="text-sm">
                    <div className="mb-4">
                        <div>
                            <h3 className="font-medium">Danh</h3>
                            <p>Em học đh chỉ code nhẹ có nên mua mac k ạ hay nên mua lap win ạ</p>
                        </div>
                        {/* Response */}
                        <div className="bg-gray-100 p-3 rounded-md">
                            <div className="flex items-center">
                                <div className="rounded-full w-5 h-5 bg-amber-400">
                                </div>
                                <h3 className="font-medium ml-2">Nguyen Thanh Luan</h3>
                                <div className="px-2 py-1 ml-2 rounded-md bg-amber-400">
                                    <span>CTV</span>
                                </div>
                            </div>
                            <p>
                            Chào anh! 
                                Dạ với môi trường học tập thì anh nên chọn máy chạy hệ điều hành Windows đó ạ.
                                Thông tin đến anh!
                            </p>
                        </div>
                    </div>
                    {/* Comment 2 */}
                    <div>
                        <div>
                            <h3 className="font-medium">Trung</h3>
                            <p>Em học đh chỉ code nhẹ có nên mua mac k ạ hay nên mua lap win ạ</p>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-md">
                            <div className="flex items-center">
                                <div className="rounded-full w-5 h-5 bg-amber-400">
                                </div>
                                <h3 className="font-medium ml-2">Nguyen Thanh</h3>
                                <div className="px-2 py-1 ml-2 rounded-md bg-amber-400">
                                    <span>CTV</span>
                                </div>
                            </div>
                            <p>
                            Chào anh! 
                                Dạ với môi trường học tập thì anh nên chọn máy chạy hệ điều hành Windows đó ạ.
                                Thông tin đến anh!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Details