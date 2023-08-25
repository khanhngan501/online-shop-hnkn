function GalleryImage() {

    const images = [
        "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/b382b7dc-9240-4b09-a07a-3bd26b10ead2/iPhone_B07/w=3840,quality=80",
        "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/2facaa80-d2eb-4763-9112-fef493c68e86/B07_Macbook_Air_M2/w=3840,quality=80",
        "https://public-files.gumroad.com/r6eigc72el6khet8okl5p4xnbpu4",
        "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/d7f74adc-0081-4eed-81dd-8319a178be2c/Window_Banner_Mockup/w=3840,quality=80",
        "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/4742f932-23da-4b65-9f1b-6bd084930d98/02/w=3840,quality=80"
    ]
    return(
        <section className="mx-auto max-w-screen-xl mb-16">
            <h2 className="text-7xl tracking-wide font-normal mb-4 max-sm:text-4xl" id="header">Thương hiệu nổi bật</h2>
            <div className="grid grid-cols-3 grid-rows-[450px] gap-4 max-sm:flex max-sm:flex-col">
                {/* Collection banner brands */}
                {
                    images.map((item, index) => {
                        const first = (index === 0) ? "col-[1_/_3]" : ""
                        return(
                            <a key={index} className={`${first} cursor-pointer relative`} href="#">
                                <img src={item} 
                                    className="w-full h-full object-cover rounded-xl"
                                    alt="brand" 
                                />
                                <div className="absolute bottom-0">
                                    MacBook Ari 2019
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default GalleryImage