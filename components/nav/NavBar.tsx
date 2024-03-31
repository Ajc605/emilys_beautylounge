import Link from "next/link";

const NavBar = ({ navItems }) =>
{
    return (
        <nav className="bg-custom-pink p-4 shadow-md sticky top-0 z-10">
            <div className="flex items-center justify-between text-black">
                <a href="/" className="text-white text-2xl font-bold">Logo</a>
                <div className="space-x-4">
                    <div className="space-x-4">
                        { navItems.map((item, index) => (
                            <Link key={ index } href={ item.href } className={ `${item.class}` }>
                                { item.name }
                            </Link>
                        )) }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;