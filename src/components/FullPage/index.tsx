const FullPage = ({ children, className="", ...rest }) => {
    return (
        <div
            className={"fixed top-0 left-0 flex flex-col h-full w-full justify-center items-center text-white bg-black " + className}
            {...rest}
        >
            {children}
        </div>
    )
}

export default FullPage
