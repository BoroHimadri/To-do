import React from "react";

const List = (props) => {
    const { sl_no , work } = props.list;
    return(
            <div className="item">
                <div className="content">
                    <div className="header">{sl_no}</div>
                    <div id="li">{work}</div>
                </div>
                <i id="ic" className="trash alternate outline icon "></i>
            </div>
    );
};

export default List;