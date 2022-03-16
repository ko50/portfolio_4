import { BrowserRouter, Route, Switch } from "react-router-dom";

import { routeList } from "config/routes";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                {routeList.map((v) => (
                    <Route key={v.name} exact path={v.path} component={v.page} />
                ))}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
