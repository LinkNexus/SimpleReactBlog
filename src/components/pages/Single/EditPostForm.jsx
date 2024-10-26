import {Modal} from "../../Modal.jsx";
import {Input} from "../../Input.jsx";
import {Button} from "../../Button.jsx";
import {useState} from "react";
import {Alert} from "../../Alert.jsx";

export function EditPostForm({post, onClose, onSave, setPersisted}) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        const data = new FormData(e.target);

        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: "PUT",
            body: data
        })
            .then((response) => {
                if (!response.ok)
                    return null;
                return response.json();
            })
            .then(d => {
                onSave(Object.fromEntries(data.entries()));
                setPersisted(true);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }
    return (<Modal onClose={onClose}>
        <h1>Edit post</h1>
        {error && <Alert type="danger">{error.message}</Alert>}
        <form className="vstack gap-3" action="" onSubmit={handleSubmit}>
            <Input name="title" label="Title" defaultValue={post.title} />
            <Input name="body" label="Content" type="textarea" defaultValue={post.body} />
            <div className="hstack gap-2 justify-content-end">
                <Button disabled={loading} type="button" onClick={onClose} variant="secondary">Cancel</Button>
                <Button disabled={loading} type="submit">Save Modifs</Button>
            </div>
        </form>
    </Modal>)
}