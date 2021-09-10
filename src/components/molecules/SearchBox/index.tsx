import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUserRequest} from "../../../store/ducks/user";
import {Typography} from "../../atoms/Typography";
import {Container} from "./styles";
import { BsSearch } from "react-icons/bs"


export const SearchBox = () => {
    const dispatch = useDispatch()

    const { failure } = useSelector(state => state.user)

    const searchBoxRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setUserRequest(searchBoxRef.current?.value || ''))

        if(searchBoxRef.current?.value) {
            searchBoxRef.current.value = '';
        }
    }

    return (
        <Container onSubmit={handleSubmit}>
            <div>
                <Input ref={searchBoxRef} placeholder={"Github username"}/>
                <Button type="submit">
                    <BsSearch />
                </Button>
            </div>
            {failure && <Typography variant="error" as="span">Nome não encontrado</Typography>}
        </Container>
    )
}