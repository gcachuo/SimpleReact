import {ReactDOM, React, $} from '../index';
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