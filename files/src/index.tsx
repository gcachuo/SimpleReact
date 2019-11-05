import * as React from "react";
import * as ReactRouterDOM from "react-router-dom";
import * as Components from "./components";

declare const BASENAME;

export default class App extends React.Component {
    render() {
        return (
            <ReactRouterDOM.BrowserRouter basename={BASENAME}>
                <ReactRouterDOM.Route path="/" component={Components.Dashboard}/>
            </ReactRouterDOM.BrowserRouter>
        )
    }
}