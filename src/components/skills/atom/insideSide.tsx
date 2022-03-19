import React from "react";

type _Props = {
    children: React.ReactNode,
    expanded: boolean,
}

export const InsideStar = (props: _Props) => {
    const path = props.expanded ? "s-clip-star" : "s-clip-decagon";

    return <div className={"bg-star grid w-72 h-72 items-center justify-items-center" + path}>
        <div className={"bg-white w-[17rem] h-[17rem] grid items-center justify-items-center" + path}>
            {props.children}
        </div>
    </div>;
}

// 中身の白いところはホバー時とそうでないときで同じものを使う
// アイコンも同じ
// 白いところの要素としてアイコンタグ説明とかを入れる
// 白いところはGrid Viewなのでcolumnにそって並べればいいよね
