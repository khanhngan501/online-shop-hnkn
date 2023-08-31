type Props = {
    onClose: () => void,
}
function InfoProd(props : Props) {

    const { onClose } = props
    // useEffect(() => {

    // }, [])
    return(
        <div className="bg-[#66636362] fixed z-[100] top-0 w-full h-[100vh]">
            {/* Header */}
            <div className="flex justify-end pt-2">
                <button className="bg-white px-2 rounded-sm" onClick={onClose}>Đóng</button>
            </div>
            {/* Content */}
            <div className="w-full px-2 h-[50vh]">
                <div className="bg-white h-full">
                    <h1>Content blog</h1>
                </div>
            </div>
        </div>
    )
}
export default InfoProd