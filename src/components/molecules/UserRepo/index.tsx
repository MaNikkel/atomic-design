import {Container} from "./styles";
import {Typography} from "../../atoms/Typography";


interface UserRepoProps {
    index: number;
    full_name: string;
    html_url: string;
}

export const UserRepo = ({ index, full_name, html_url }: UserRepoProps) => {
    return (
        <Container href={html_url} target="_blank">
            <Typography as="h1" size="xl">
                {index}.
            </Typography>
            <Typography as="h2" size="lg" variant="light">
                {full_name}
            </Typography>
        </Container>
    )
}