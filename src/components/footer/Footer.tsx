function Footer() {
    const menuFooter = [
        {
            name: "Products",
            items: [
            "Model 000", "Model 001", "Laces", "Masks", "No-show Socks", "Crew Socks", "Gift Cards"]
        },
        {
            name: "Support",
            items: ["Helper Center", "FAQs", "Order Status", "Returns & Exchanges", "Contact Us"]
        }, 
        {
            name: "Everything Else",
            items: ["Community", "Why Atoms", "About Atoms", "Discount", "Blog"]
        }
    ]
    const socials = [
        {
            name: "Twitter",
            img: "https://cdn.sanity.io/images/47jnag19/production/7f5403a2e5069676c3224dac036969dbaaa9d5f1-20x18.png?w=40&q=80&auto=format"
        },
        {
            name: "Instagram",
            img: "https://cdn.sanity.io/images/47jnag19/production/5f05f6e551261fc06b53f0255f697ba1fddad3dd-20x20.png?w=40&q=80&auto=format"
        }, 
        {
            name: "Facebook",
            img: "https://cdn.sanity.io/images/47jnag19/production/008dac6094b8b09aef300a88e383d11620daa097-18x18.png?w=40&q=80&auto=format"
        }
        

    ]
    return(
        <footer className="bg-black">
            <div className="grid max-sm:grid-cols-2 max-sm:px-4 max-sm:pt-4">
            {
                menuFooter.map((value, index) => (
                    <div key={index} className="text-white max-sm:mb-4 ">
                        <h3 className="max-sm:font-medium max-sm:text-lg max-sm:mb-3 tracking-wide">{value.name}</h3>
                        <div className="flex flex-col text-sm">
                        {
                            value.items.map((item, i) => (
                                <a href="#" className="max-sm:mb-1" key={i}>{item}</a>
                            ))
                        }
                        </div>
                    </div>
                ))
            }
            </div>
            {/* Social media */}
            <div className="max-sm:flex max-sm:justify-around max-sm:pb-4">
            {
                socials.map((value, index) => (
                    <a href="#" key={index} className="text-white flex items-center">
                        <img src={value.img} className="max-sm:w-6 max-sm:h-6" alt="logo" />
                        <span className="max-sm:ml-2 max-sm:text-sm">{value.name}</span>
                    </a>
                ))
            }
            </div>
        </footer>
    )
}
export default Footer