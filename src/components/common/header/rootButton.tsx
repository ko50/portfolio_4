import { Link } from "react-router-dom";

import { routes } from "utils/routes";

export const RootButton = () => {
    return <Link to={routes.top.path}>
        <div className="text-4xl text-white font-zcool">ko50.dev</div>
    </Link>;
}
