import Link from "next/link"
import { useEffect, useState } from "react";

function NavBar() {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState("transparent");

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor("rgba(0, 0, 0, 0.9)");
            } else {
                setColor("transparent");
            }
        };
        window.addEventListener("scroll", changeColor);
    }, []);

    return (
        <div style={{ backgroundColor: `${color}`}} 
        className="flex fixed w-full justify-center py-5 px-24 bg-opacity-65 text-white">
            <Link href={"/"}>
                <h1 className="text-xl mt-1 hover:scale-125">VAIKA</h1>
            </Link>
            <ul className="flex ml-auto gap-7">
                <li className="mt-2 hover:underline">
                    <Link href={"/"}>Home</Link>
                </li>
                <li className="mt-2 hover:underline">
                    <Link href={"/"}>Search</Link>
                </li>
                <li className="mt-2 hover:underline">
                    <Link href={"/"}>Contact</Link>
                </li>
                <li>
                    <button className="px-6 py-2 border border-white rounded-full text-black bg-white hover:text-white hover:bg-transparent ">Sign Up</button>
                </li>
            </ul>

        </div>
    )
}

export default NavBar