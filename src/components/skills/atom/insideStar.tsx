import React from "react";

type _Props = {
    children: React.ReactNode,
    expanded: boolean,
}

export const InsideStar = (props: _Props) => {
    const path = props.expanded ? "s-clip-star" : "s-clip-decagon";
    const outerSize = props.expanded ? "w-72 h-72" : "w-10 h-10";
    const innerSize = props.expanded ? "w-[17rem] h-[17rem]" : "w-10 h-10";

    return <div className={"bg-star grid items-center justify-items-center " + path + " " + outerSize}>
        <div className={"bg-white grid items-center justify-items-center " + path + " " + innerSize}>
            {props.children}
        </div>
    </div>;
}

// 中身の白いところはホバー時とそうでないときで同じものを使う
// アイコンも同じ
// 白いところの要素としてアイコンタグ説明とかを入れる
// 白いところはGrid Viewなのでcolumnにそって並べればいいよね
