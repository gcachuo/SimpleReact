import {ReactDOM, React, $, ReactRouterDOM} from '../index';
import App, {Logo, Navbar, Title} from './app';
import Dashboard from "./pages/Dashboard";
declare const BASENAME;

$("title").text(Title);
$("[rel='shortcut icon']").attr('href', Logo.favicon);

// @ts-ignore
ReactDOM.render((<ReactRouterDOM.BrowserRouter basename={BASENAME}><Navbar/><App>
    <ReactRouterDOM.Route exact path="/" component={Dashboard}/>
    <ReactRouterDOM.Route path="/dashboard" component={Dashboard}/>
</App>
</ReactRouterDOM.BrowserRouter>), $("#app")[0]);