import {React, $, ReactRouterDOM} from "../index";

export const Api = {url: 'api/'};

export const Logo = {
    regular: '',
    small: '',
    favicon: ''
};
export const Title = "";

@ReactRouterDOM.withRouter
export class Navbar extends React.Component {
    state: {
        module: string;
    };

    constructor(props) {
        super(props);
        this.state = {module: this.props.history.location.pathname};
        this.props.history.listen((location, action) => {
            this.state.module = this.props.history.location.pathname;
        });
    }

    componentDidMount(): void {
        this.setState({module: this.props.history.location.pathname});
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <span>
                    <img src={Logo.small} alt="logo"/>
                    <a href="./" className="navbar-brand">
                        {Title}
                    </a>
                </span>
                <form className="form-inline">
                </form>
            </nav>
        );
    }
}


@ReactRouterDOM.withRouter
export default class App extends React.Component {
    state: {
    };

    constructor(props) {
        super(props);
        App.changeState = App.changeState.bind(this);
    }

    static changeState(state) {
        this.setState(state);
    }

    componentDidUpdate(prevProps, props) {

    }

    render() {
        return (
            <>
                <div className="container pt-3">
                    {!!this.state ? this.props.children : 'Loading...'}
                </div>
            </>
        )
    }
}