import React , {ReactNode} from "react";

interface UserLayoutProps {
    children: ReactNode;   //ReactNode: یک نوع است که نماینده هرچیزی است -- رشته، عدد ،لیست و ...
  }

function UserLayout({children}:UserLayoutProps){

    return(
        <div className="text-[#b4b4b4]">
           {children}
        </div>
    )
}

export default UserLayout;