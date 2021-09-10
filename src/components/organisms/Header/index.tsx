import {SearchBox} from "../../molecules/SearchBox";
import {Typography} from "../../atoms/Typography";
import {useSelector} from "react-redux";
import {Container} from "./styles";

import {Logo} from "../../molecules/Logo";


export const Header = () => {
    const { username } = useSelector(state => state.user)


    return (
        <Container>
            <Logo />
            <Typography
                as="h1"
                size="lg"
                weight="bold"
            >{username || 'Ninguém aqui'}</Typography>
            <SearchBox />
        </Container>
    )
}