import {ReactDOM, React, $, ReactRouterDOM} from '../index';
import App, {Logo, Navbar, Title} from './app';
declare const BASENAME;

$("title").text(Title);
$("[rel='shortcut icon']").attr('href', Logo.favicon);

// @ts-ignore
ReactDOM.render((<ReactRouterDOM.BrowserRouter basename={BASENAME}><Navbar/><App>
    <ReactRouterDOM.Route exact path="/" component=""/>
</App>
</ReactRouterDOM.BrowserRouter>), $("#app")[0]);