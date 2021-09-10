import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import Button from "./components/atoms/Button";
import {Typography} from "./components/atoms/Typography";
import Input from "./components/atoms/Input";
import {SearchBox} from "./components/molecules/SearchBox";
import {Header} from "./components/organisms/Header";
import {MainLayout} from "./components/templates/Main";
import {UserReposList} from "./components/organisms/UserReposList";

function App() {
  return (
    <Provider store={store}>
        <MainLayout>
            <UserReposList />
        </MainLayout>
    </Provider>
  );
}

export default App;
