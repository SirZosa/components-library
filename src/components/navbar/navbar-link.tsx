import { ReactNode } from "react"

type NavBarLinkProps = {
    href: string
    children: ReactNode
    active?: boolean
    color?: string
    fontSize?: string
    tabColor?: string
}

export default function NavBarLink({href, children, active, color="inherit", fontSize="inherit", tabColor="#e0e7ff", ...rest}: NavBarLinkProps) {
    const className = active ? "link active" : "link inactive";
    const listClassName = active ? "activeList" : "inactiveList";
    return (
        <li className={`list ${listClassName}`}>
            <div className={`rounded-tab ${active ? "active-tab": ""}`} style={{backgroundColor:tabColor}}></div>
            <a href={href} className={className}{...rest}>{children}</a>
        </li>
    )
}