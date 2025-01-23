import { ReactNode } from "react"

type NavBarLinkProps = {
    href: string
    children: ReactNode
    active?: boolean
}

export default function NavBarLink({href, children, active, ...rest}: NavBarLinkProps) {
    const className = active ? "link active" : "link inactive";
    const listClassName = active ? "activeList" : "inactiveList";
    return (
        <li className={`list ${listClassName}`}>
            <div className={`rounded-tab ${active ? "active-tab": ""}`}></div>
            <a href={href} className={className}{...rest}>{children}</a>
        </li>
    )
}