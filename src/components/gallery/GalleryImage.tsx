function GalleryImage() {

    const images = [
        "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/b3e44fd7-df8f-449a-a2c7-48bb948518ab/men-s-shoes-clothing-accessories.png",
        "https://i.pinimg.com/564x/4f/0e/ae/4f0eae7968b70c2784e702f1bd1583ba.jpg",
        "https://i.pinimg.com/564x/0e/b3/fe/0eb3fe3d7576a1ef58e7dc241018199c.jpg",
        "https://i.pinimg.com/564x/28/b7/13/28b713d4ac081cf82c388cf9a663f896.jpg",
        "https://i.pinimg.com/564x/31/27/ef/3127effae8cd24fe814325c014ae449e.jpg"
    ]
    return(
        <section className="mx-auto max-w-screen-xl mb-16">
            <h2 className="text-7xl tracking-wide font-normal mb-4" id="header">Thương hiệu nổi bật</h2>
            <div className="grid grid-cols-3 grid-rows-[450px] gap-4">
                {/* Collection banner brands */}
                {
                    images.map((item, index) => {
                        const first = (index === 0) ? "col-[1_/_3]" : ""
                        return(
                            <a key={index} className={`${first} cursor-pointer`} href="#">
                                <img src={item} 
                                    className="w-full h-full object-cover rounded-xl"
                                    alt="brand"  
                                />
                            </a>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default GalleryImage