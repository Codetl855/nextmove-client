import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const BreadCrumb = () => {

    const location = useLocation()
    const segments = location.pathname.split("/").filter(Boolean)
  return (
    <nav className=' flex items-center gap-2 '>
        <NavLink to="/dashboard" className="hover:underline">Home</NavLink>

        {
            segments.map((seg, i)=>{
                const path = "/" + segments.slice(0, i+1).join("/");
                return(
                    <span key={path} className='flex items-center gap-2'>

                        <span className='icon-[ic--baseline-keyboard-arrow-right]'></span>
                        <NavLink to={path} className="capitalize hover:underline text-aztec">
                            {seg}
                        </NavLink>
                    </span>
                )
            })
        }
    </nav>
  )
}

export default BreadCrumb