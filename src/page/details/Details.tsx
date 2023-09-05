import { useEffect, useRef, useState } from "react"
import Header from "../../components/header/Header"
import { createPortal } from "react-dom"
import InfoProd from "../../components/dialog/InfoProd"

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

const colors = ["Bạc", "Xám", "Xanh đen", "Vàng"]

type  Verify = {
    isValid: boolean | null,
    message: string | null
}
function Details() {
    const [ backgroundControl, setBackgroundControl ] = useState<string>("bg-[#dacfcf82] text-[#302f2f50]")
    const [ selectedColor, setSelectedColor ] = useState(0)
    const [color, setColor] = useState("")
    const [ currentImg, setCurrentImg ] = useState<number>(0)
    const [ showModalBlog, setShowModalBlog ] = useState(false)
    const [ openComment, setOpenComment ] = useState(false)
    const commentRef = useRef<HTMLTextAreaElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const phoneNumberRef = useRef<HTMLInputElement>(null)
    const initialVerify:Verify = {
        isValid: null,
        message: null,
    }
    // const [ nameEntered, setNameEntered ] = useState(false)
    // const [ emailEntered, setEmailEntered ] = useState(false)
    // const [ phoneNumberEntered, setPhoneNumberEntered ] = useState(false)
    const [ verifyComment, setVerifyComment ] = useState(initialVerify)
    const [ verifyName, setVerifyName ] = useState(initialVerify)
    const [ verifyEmail, setVerifyEmail ] = useState(initialVerify)
    const [ verifyPhoneNumber, setVerifyPhoneNumber ] = useState(initialVerify)

    const validCommentInput = (value:string) => {
        if (value.length > 4) {
            setVerifyComment({
                isValid: true,
                message: null,
            })
            return true
        } else {
            setVerifyComment({
                isValid: false,
                message: "Bình luận tối thiểu 5 kí tự"
            })
            return false
        }
    }
    const validNameInput = (value:string) => {
        if (value.length > 4) {
            setVerifyName({
                isValid: true,
                message: null,
            })
            return true
        } else {
            setVerifyName({
                isValid: false,
                message: "Tên không hợp lệ",
            })
            return false
        }
    }
    const validEmailInput = ( value:string ) => {
        if (value.length === 0) {
            setVerifyEmail({
                isValid: false,
                message: "Email không bỏ trống"
            })
            return false
        } else {
            // Link references: https://regex101.com/r/SxCdMO/1
            const regexEmail = /(^[\w_.]+[@]{1}[a-z0-9]+[\.][a-z]+$)/
            const isEmail = value.match(regexEmail)
            if ( !isEmail ) {
                setVerifyEmail({
                    isValid: false,
                    message: "Email không đúng định dạng"
                })
                return false
            }
            setVerifyEmail({
                isValid: true,
                message: null
            })
            return true
        }
    }
    const validPhoneNumberInput = (value:string) => {
        if (value.indexOf(" ") >= 0) {
            setVerifyPhoneNumber({
                isValid: false,
                message: "Số điện thoại chỉ chứa số"
            })
            return false
        }
        if (value.length < 10) {
            setVerifyPhoneNumber({
                isValid: false,
                message: "Số điện thoại không hợp lệ"
            })
            return false
        } else {
            // Link References: https://regex101.com/r/JdjpqD/1
            const regexPhoneVN = /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/
            const isPhoneNumber = Boolean(regexPhoneVN.exec(value))
            if ( !isPhoneNumber ) {
                setVerifyPhoneNumber({
                    isValid: false,
                    message: "Số điện thoại không hợp lệ"
                })
                return false
            }
        }
        setVerifyPhoneNumber({
            isValid: true,
            message: null
        })
        return true
    }
    const handleCommentBtn = () => {
        if (commentRef.current) {
            if ( !validCommentInput(commentRef.current?.value)) {
                return
            }
        }
        if (nameRef.current) {
            if ( !validNameInput(nameRef.current?.value) ) {
                return
            }
        }
        if (emailRef.current) {
            if ( !validEmailInput(emailRef.current?.value) ) {
                return
            }
        }
        if (phoneNumberRef.current) {
            if ( !validPhoneNumberInput(phoneNumberRef.current.value) ) {
                return
            }
        }
        const infoUser = {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            phoneNumber: phoneNumberRef.current?.value
        }
        const comment = commentRef.current?.value
        console.log(infoUser)
        console.log(`Comment: ${comment}`)
        
    }
    useEffect(() => {
        if ( showModalBlog ) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "scroll"
        }
    }, [showModalBlog])

    useEffect(() => {
    }, [selectedColor])

    return (
        <section className="bg-white">
            <Header />
            {/* Name product */}
            <div className="text-sm font-medium tracking-wide leading-5 mb-4 sm:text-lg sm:px-6 lg:text-xl xl:px-20 2xl:mx-auto 2xl:max-w-screen-xl 2xl:px-0">
                <h2>Laptop Apple MacBook Air 13 inch M2 2022 8-core CPU/8GB/256GB/8-core GPU (MLXY3SA/A)</h2>
            </div>
            {/* Section for specifications product */}
            <div className="border-t-[1px] border-t-gray-200 py-4 md:px-6 md:grid md:grid-cols-2 md:relative md:gap-x-2 lg:gap-x-6 xl:px-20 xl:gap-x-8 xl:mb-16 2xl:mx-auto 2xl:max-w-screen-xl 2xl:px-0 2xl:gap-x-14">
                {/* Options to selected */}
                {/* TODO: tach ra component rieng */}
                <div className="text-sm flex justify-around mb-4 sm:text-base md:absolute md:right-0 md:top-4 md:pr-6 lg:justify-end lg:gap-x-6 lg:px-6 xl:px-20 2xl:pr-0">
                    {
                        colors.map((value, index) => {
                            let c = ""
                            if (selectedColor === index) {
                                console.log(`Index: ${index} Selected: ${selectedColor}`)
                                c="border-sky-300"
                            }
                            return (
                                <div key={index} className={`px-4 py-2 border-[1px] w-fit hover:cursor-pointer ${c}`}
                                    onClick={() => {
                                        setSelectedColor(index)
                                    }}
                                >
                                    <span>{value}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="md:row-[1_/_3]">
                    {/* Carousel/Slider images */}
                    <div className="">
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
                    </div>
                    {/* Overview product */}
                    <div className="flex flex-col items-center mb-4 px-1 sm:text-sm lg:text-base">
                        <div className="mb-3">
                            <h3 className="font-medium">Thông tin sản phẩm</h3>
                            <p className="font-medium mb-2">Sau 14 năm, ba lần sửa đổi và hai kiến trúc bộ vi xử lý khác nhau, kiểu dáng mỏng dần mang tính biểu tượng của MacBook Air đã đi vào lịch sử. Thay vào đó là một chiếc MacBook Air M2 với thiết kế hoàn toàn mới, độ dày không thay đổi tương tự như MacBook Pro, đánh bật mọi rào cản với con chip Apple M2 đầy mạnh mẽ.</p>
                            <p className="text-sm sm:text-base">Sự đẳng cấp đến từ ngoại hình của chiếc MacBook Air nhà Apple là điều không thể phủ nhận và khó có dòng sản phẩm cùng phân khúc nào có thể qua mặt được. Vẫn là lớp vỏ kim loại nguyên khối cứng cáp cùng các cạnh góc vuông vức, sang trọng nhưng chiếc MacBook Air 2022 năm nay đã thoát ra khỏi ngôn ngữ thiết kế nhẹ nhàng vốn có từ lâu và khoác lên diện mạo mới tương tự như “đàn anh” MacBook Pro.</p>
                        </div>
                        <div className="flex items-center rounded-md cursor-pointer justify-center border-[1px] border-sky-500 text-sky-500 w-[200px] text-sm py-1 gap-3"
                            onClick={()=> setShowModalBlog(true)}
                        >
                            <span>Xem thêm</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                            </svg>
                        </div>
                        {/* Show modal/popup more info */}
                        {
                            showModalBlog && createPortal(
                                <InfoProd onClose={()=>setShowModalBlog(false)} />,
                                document.querySelector("#info-prod")!
                                // document.body
                            )
                        }
                    </div>
                </div>
                {/* Parameters */}
                <div className="px-1 flex flex-col items-start text-sm mb-4 sm:mb-6 md:mt-14 lg:text-base">
                    <div className="min-w-full font-medium mb-2 sm:mb-4">
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
                    <div className="flex items-center rounded-md cursor-pointer justify-center border-[1px] border-sky-500 text-sky-500 w-[200px] text-sm py-1 gap-3 mx-auto">
                        <span>Xem thêm chi tiết</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                {/* Actions button */}
                <div className="flex justify-around">
                    <button type="button" className="uppercase rounded-md tracking-wide bg-sky-700 py-2 px-5 text-sm font-medium text-white md:h-[60px]">Thêm vào Cart</button>
                    <button type="button" className="uppercase rounded-md tracking-wide bg-orange-700 py-2 px-5 text-sm font-medium text-white md:h-[60px]">Mua ngay</button>
                </div>
            </div>
            {/* Section for review product */}
            {/* Comment/discussion */}
            <div className="lg:mb-16 2xl:mx-auto 2xl:w-auto 2xl:max-w-screen-xl 2xl:px-0">
                <div className="border-[1px] rounded-md mb-4 p-2 sm:mx-auto lg:w-1/2 xl:ml-20 2xl:m-0 2xl:w-3/4">
                    {/* Writing new comment */}
                    <div className="text-sm border-b-[1px] border-b-gray-500 mb-4">
                        <h3 className="font-medium text-base mb-2">Bình luận</h3>
                        <textarea name="comment" id="" 
                            placeholder="Mời bạn bình luận hoặc đặt câu hỏi" 
                            className="rounded-md w-full border-[1.2px] border-gray-400 p-2 mb-2"
                            onClick={()=>{
                                // suppose user not logged in
                                setOpenComment(true)
                            }}
                            onBlur={(e) => {
                                const isComment = validCommentInput(e.target.value)
                                if (!isComment) e.target.focus()
                            }}
                            ref={commentRef}
                        />
                        {
                        openComment ? 
                        <div className="flex flex-col gap-y-2 sm:gap-y-4">
                            <div>
                                <label>Tên khách hàng: <br/>
                                <input type="text" name="full-name" 
                                    className="p-2 border-[1.2px] w-[75%] border-gray-400"
                                    // onChange={()=>setNameEntered(true)}
                                    onBlur={(e) => {
                                        const isName = validNameInput(e.target.value)
                                        if ( !isName ) {
                                            e.target.focus()
                                        }
                                    }}
                                placeholder="Họ và tên" ref={nameRef}/></label>
                            </div>
                            <div>
                                <label>Email khách hàng: <br/>
                                <input type="text" name="email" 
                                    className="p-2 border-[1.2px] w-[75%] border-gray-400"
                                    // onChange={()=>setEmailEntered(true) }
                                    onBlur={(e) => {
                                        const isEmail = validEmailInput(e.target.value)
                                        if ( !isEmail) {
                                            e.target.focus()
                                        }
                                    }}
                                placeholder="Email" ref={emailRef}/></label>
                            </div>
                            <div>
                                <label>Số điện thoại khách hàng: <br/>
                                <input type="text" name="phoneNumber" 
                                    className="p-2 border-[1.2px]  border-gray-400"
                                    onKeyDown={(e) => {
                                        const isDigit = e.key.match(/[0-9]/)
                                        if ( !isDigit && e.key !== "Unidentified") {
                                            if ( e.key.match(/[a-zA-Z]/)) {
                                                
                                                e.preventDefault()
                                            }
                                        }
                                        // setPhoneNumberEntered(true)
                                    }}
                                    // onClick={() => setPhoneNumberEntered(true)}
                                    onBlur={(e) => {
                                        const isPhone = validPhoneNumberInput(e.target.value)
                                        if ( !isPhone ) {
                                            e.target.focus()
                                        }
                                    }}
                                placeholder="Số điện thoại" ref={phoneNumberRef}/></label>
                            </div>
                            <div className="mb-2 w-full flex justify-center sm:mb-4">
                                <button className={`p-2 bg-lime-600 text-white rounded-md tracking-wide sm:p-3 sm:text-base`}
                                    onClick={handleCommentBtn}
                                >Bình luận</button>
                            </div>
                        </div> : null
                        }
                    </div>
                    {/* Before discussions */}
                    <div className="text-sm sm:text-base">
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
            </div>
            {/* List recommendation products */}
            <div>
                
            </div>
        </section>
    )
}
export default Details