import { BrowserRouter, Route, Switch } from "react-router-dom";

import { routeList, setupRoutes } from "utils/routes";
import { setupAPI } from "api/setup";

function App() {
    setupRoutes();
    setupAPI();

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
