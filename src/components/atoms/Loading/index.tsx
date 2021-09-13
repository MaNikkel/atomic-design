import {AiOutlineLoading} from "react-icons/all";
import {Container} from "./styles";

interface LoadingSpinnerProps {
    size?: string | number;
}

export const LoadingSpinner = ({ size }: LoadingSpinnerProps) => {
    return (
        <Container>
            <AiOutlineLoading size={size}/>
        </Container>
    )
}