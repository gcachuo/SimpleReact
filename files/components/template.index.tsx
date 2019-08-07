import {ReactDOM, React, $} from '../###LIB###/imports';
import App, {Navbar, Title} from './app';

export const Api = {url: 'api/'};

ReactDOM.render(
    Title,
    $("title")[0]
);

ReactDOM.render(
    <Navbar/>,
    $(".navbar")[0]
);

ReactDOM.render(
    <App/>,
    $("#app")[0]
);