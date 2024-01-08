import { OrgControl } from "./_components/org-controler";

const OrganizationIdLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <>
            <OrgControl />
            {children}
        </>
    )
}

export default OrganizationIdLayout;