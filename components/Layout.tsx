interface LayoutProps{
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) =>{
    return(
        <div className="bg-black h-screen">
            <div className="container h-full mx-auto xl:px-30 max-w-6xl">
                <div className="grid grid-cols-4 h-full">
                    <h1>Hello</h1>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;