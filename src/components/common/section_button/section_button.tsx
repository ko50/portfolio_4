import { Link } from "react-router-dom";

import { RouteInfo } from "config/routes";

type _Props = {
    route: RouteInfo,
}

export function SectionButton(props: _Props) {
    return <div className="px-1.5 py-2">
        <Link to={props.route.path}>
            <div className="bg-ocean px-2 py-1.5 rounded drop-shadow-lg">
                <div className="text-3xl text-star font-dosis">{props.route.name}</div>
            </div>
        </Link>
    </div>;
}
