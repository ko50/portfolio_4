type _Props = {
    screenshot: string,
}

export const Screenshot = (props: _Props) => {
    return <img className="h-80 w-full object-cover w-clip-screenshot" src={props.screenshot} />;
};
