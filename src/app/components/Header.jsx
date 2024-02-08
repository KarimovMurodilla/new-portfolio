import dynamic from 'next/dynamic';

const Nav = dynamic(() => import('./Nav'), { ssr: false });

const Header = () => {
    return (
        <Nav />
    )
}

export default Header;