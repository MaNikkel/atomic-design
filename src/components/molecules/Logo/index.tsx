import {GoLogoGithub} from "react-icons/go";
import {Container} from "./styles";
import {Typography} from "../../atoms/Typography";

export const Logo = () => {
    return (
        <Container>
            <GoLogoGithub size={54}/>
            <Typography
                as={"span"}
                size={"lg"}
                variant={"light"}
            >Explorer</Typography>
        </Container>
    )
}