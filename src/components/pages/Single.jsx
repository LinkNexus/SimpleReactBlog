import {Card} from "../Card.jsx";
import {useFetch} from "../../hooks/useFetch.js";
import {Spinner} from "../Spinner.jsx";
import {Alert} from "../Alert.jsx";
import {useDocumentTitle} from "../../hooks/useDocumentTitle.js";
import {Button} from "../Button.jsx";
import {useToggle} from "../../hooks/useToggle.js";
import {Modal} from "../Modal.jsx";
import {EditPostForm} from "./Single/EditPostForm.jsx";
import {useState} from "react";

export function Single({postId}) {
    const {loading, data: post, error, setData} = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {});
    const [isEditing, toggleEditing] = useToggle(false);
    const [persisted, setPersisted] = useState(false);
    useDocumentTitle(post?.title);

    const handleSave = (data) => {
        setData({
            ...post,
            ...data
        });
        toggleEditing();
    };

    if (loading)
        return <Spinner />;

    if (error)
        return <Alert type="danger">{error.message}</Alert>;

    return (
        <div className="container mt-3">
            {persisted && <Alert type="success">The post has been successfully persisted</Alert>}
            <h1 className="mb-3">{post.title}</h1>
            <img className="img-fluid img-thumbnail my-3" src={`https://picsum.photos/id/${post.id}/800/600`} alt=""/>
            <p>{post.body}</p>
            {isEditing && <EditPostForm
                post={post}
                onClose={toggleEditing}
                onSave={handleSave}
                setPersisted={setPersisted}
            >
                Edit Post
            </EditPostForm>}
            <Button onClick={toggleEditing} variant="secondary">Edit Post</Button>
            <div className="d-flex flex-row justify-content-between">
                {post.id - 1 !== 0 && <p><a href={`#post:${post.id - 1}`}>Previous Post</a></p>}
                <p><a href={`#post:${post.id + 1}`}>Next Post</a></p>
            </div>
        </div>
    )
}