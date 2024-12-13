


function Header() {
    return (
        <>

            <header className=" mt-[16px] w-full px-[20px] gap-[12px] flex justify-between items-center">

                <img src="./icons/Menu.svg" />

               <div className="w-[calc(100%-88px)] relative"> 
                <div className="relative">
                    <div className="absolute z-50 right-[10px]"><span>جستجو در</span>
                    <span><img src="./icons/TYPE.svg" /></span>
                    </div>
                <input className="w-full pr-[10px] relative text-[#A72F3B] h-[32px] border-[#D6D6D6] rounded-full border-[1px] focus:outline-none" />
                </div>
                <img className="absolute left-[12px] top-[8px]" src="./icons/search-normal.svg" />
                </div>

                <img src="./icons/LOGO-Mobile.svg" />
              
            </header>
        </>
    )
}

export default Header;