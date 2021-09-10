import {UserReposList} from "../../components/organisms/UserReposList";
import React from "react";
import {MainLayout} from "../../components/templates/Main";

export const Home = () => {
    return (
        <MainLayout>
            <UserReposList />
        </MainLayout>
    )
}