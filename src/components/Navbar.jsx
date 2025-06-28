import { useEffect, useState } from "react";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`w-full flex items-center py-5 fixed top-0 z-100 ${scrolled ? "bg-black" : "bg-transparent"
                }`}
        >
            <div className="w-full max-w-7xl flex items-center justify-between mx-auto px-4">
                <div>
                    <a href="/" className="text-xl">Baburao Adkane</a>
                </div>
            </div>
        </header>
    )
}

export default Navbar