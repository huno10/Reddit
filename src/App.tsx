import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import './main.global.css';
import { Layout } from "./shared/Layout/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content/Content"
import { CardsList } from "./shared/CardsList/CardsList"
import { PostContextProvider } from "./shared/context/postsContext";
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from "./store/store";
import thunk from "redux-thunk";

import { BrowserRouter, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { Post } from "./shared/Post/Post";
import { NotFound } from "./pages/NotFound";
import { HomePage } from "./pages/HomePage";

import { RecoilRoot } from 'recoil'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

function AppComponent() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <Provider store={store}>
            <RecoilRoot>
                {mounted && (
                    <BrowserRouter>
                        <PostContextProvider>
                            <Layout>
                                <Header />
                                <Content>
                                    <Routes>
                                        <Route path="/" element={<HomePage />} />
                                        <Route path="posts/*" element={<CardsList />} >
                                            <Route path=":id" element={<Post />} />
                                        </Route>
                                        <Route path="*" element={<NotFound />} />
                                    </Routes>
                                </Content>
                            </Layout>
                        </PostContextProvider>
                    </BrowserRouter>
                )
                }
            </RecoilRoot>
        </Provider >
    );
}

export const App = hot(() => <AppComponent />)


