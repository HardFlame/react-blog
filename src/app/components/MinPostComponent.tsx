import { NavLink } from "react-router";
import {type IPost } from "../../types/Post";
import "../css/MinPostComponent.css"

export default function MiniPostComponent(props: {
    postData: IPost;
}) {
    const postData = props.postData;
    const title = postData.title;
    const author = postData.author;
    const tags = postData.tags;
    const content = postData.content;
    return (
        <div className="post">
            <div className="post-head">
                <NavLink to={title}>
                    <h3 className="title">{title}</h3>
                </NavLink>
                <p className="time"></p>
            </div>
            <div className="post-info">
                <NavLink to={author} className="author">
                    {author}
                </NavLink>
                <div className="tags-list">
                    {tags.map((tags) => {
                        return (
                            <NavLink to={tags} className="tag">
                                {tags}
                            </NavLink>
                        );
                    })}
                </div>
            </div>
            <div className="post-content">{content}</div>
        </div>
    );
}
