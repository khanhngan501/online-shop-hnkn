function CollectionType() {
    const brands = [
        {
            id: 1,
            name: "HP",
            img: "https://cdn.tgdd.vn/Brand/1/logo-hp-149x40-1.png",
        },
        {
            id: 2,
            name: "Asus",
            img: "https://cdn.tgdd.vn/Brand/1/logo-asus-149x40.png",
        },
        {
            id: 3,
            name: "Lenovo",
            img: "https://cdn.tgdd.vn/Brand/1/logo-lenovo-149x40.png",
        },
        {
            id: 4,
            name: "Acer",
            img: "https://cdn.tgdd.vn/Brand/1/logo-acer-149x40.png",
        },
        {
            id: 5,
            name: "Dell",
            img: "https://cdn.tgdd.vn/Brand/1/logo-dell-149x40.png",
        },
        {
            id: 6,
            name: "Msi",
            img: "https://cdn.tgdd.vn/Brand/1/logo-msi-149x40.png",
        },
        {
            id: 7,
            name: "MacBook",
            img: "https://cdn.tgdd.vn/Brand/1/logo-macbook-149x40.png",
        },
        {
            id: 8,
            name: "Gigabyte",
            img: "https://cdn.tgdd.vn/Brand/1/logo-gigabyte-149x40.png",
        },
    ]
    return(
        <div className="bg-[#e0e0e0] max-sm:px-4 max-sm:py-4 max-sm:max-w-full max-sm:mb-6">
            <div className="grid max-sm:grid-cols-3 max-sm:gap-4">
            {
                brands.map((value, index) => (
                    <a href="#" key={index}>
                        <img src={value.img} alt="logo" className="bg-white rounded-xl max-sm:p-2" />
                    </a>
                ))
            }
            </div>
        </div>
    )
}
export default CollectionType