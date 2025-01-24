import { useState, ReactNode } from "react"

type NavBarLinkProps = {
    href: string
    children: ReactNode
    active?: boolean
    color?: string
    fontSize?: string
    tabColor?: string
    description?: string
    hoverColor?: string
    hoverBackgroundColor?: string
}

export default function NavBarLink({href, children, active, color="inherit", fontSize="inherit", tabColor="#fff", description, hoverColor='inherit', hoverBackgroundColor='inherit', ...rest}: NavBarLinkProps) {
    const [hover, setHover] = useState(false);
    const className = active ? "link active" : "link inactive";
    const listClassName = active ? "activeList" : "inactiveList";
    return (
        <li className={`list ${listClassName}`}>
            <div className={`rounded-tab ${active ? "active-tab": ""}`} style={{backgroundColor:tabColor}}></div>
            <a href={href} className={className} style={{color:color, fontSize:fontSize}} {...rest} onMouseEnter={()=>setHover(true)} onMouseLeave={()=> setHover(false)}>{children}</a>
            {hover && description && !active && <span className="description" style={{color:hoverColor, backgroundColor: hoverBackgroundColor}}>{description}</span>}
        </li>
    )
}