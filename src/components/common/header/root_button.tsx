import { Link } from "react-router-dom";

import { routes } from "config/routes";

export function RootButton() {
    return <Link to={routes.top.path}>
        <div className="text-4xl text-white font-zcool">ko50.dev</div>
    </Link>
}
