import { useState } from "react";

function Card( props: any ) {
    const {prod} = props
    const [ colorText, setColorText ] = useState('')
    const [ background, setBackground ] = useState('invisible')
    // console.log(prod)
    return(
        <div className="px-8 py-5 relative bg-[#F2F2F2] rounded-xl" 
            onMouseOver={() => {
                setColorText("text-white")
                setBackground("visible")
            }}
            onMouseOut={() => {
                setColorText("text-black")
                setBackground("invisible")
            }}
        >
            <a href="#">
                <div>
                    <img src={prod.img1} alt="avatar" />
                    {/* info product */}
                    <div className={colorText +" "+ "flex justify-between z-30 relative"}>
                        <h3>{prod.name}</h3>
                        <div>{prod.price}$</div>
                    </div>
                </div>
            </a>
            <img src={prod.img2} 
                className={"absolute w-full h-full object-cover left-0 top-0 rounded-xl z-20" + " " + background}
                alt="background image" 
            />
        </div>
    )
}
export default Card