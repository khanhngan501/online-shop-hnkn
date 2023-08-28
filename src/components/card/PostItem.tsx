function PostItem() {
    return(
        <div className=" hover:cursor-pointer hover:bg-[#393a3c2d] sm:px-3">
            <a href="/"
                className="sm:grid sm:grid-cols-[200px_,1fr] gap-x-8"
            >
                <img src="https://gstatic.gvn360.com/2023/08/image4-8-218x150.jpg" alt="anh bai post" 
                    className="h-36 w-auto object-contain sm:row-span-2"
                />
                <p className="text-white max-sm:text-sm">
                    Corsair mở bán bàn phím K70 MAX và tai nghe HS80 MAX với khả năng điều khiển và tùy biến vượt trội
                </p>
                {/* Information Auth and date create at*/}
                <div className="max-sm:text-xs">
                    <span className="text-red-600">Axium Fox</span>
                    <span className="text-gray-700"> - 12/09/2023</span>
                </div>
            </a>
        </div> 
    )
}
export default PostItem