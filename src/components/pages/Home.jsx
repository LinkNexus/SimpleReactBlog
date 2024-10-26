import {useDocumentTitle} from "../../hooks/useDocumentTitle.js";
import {useFetch} from "../../hooks/useFetch.js";
import {Spinner} from "../Spinner.jsx";
import {Alert} from "../Alert.jsx";
import {Card} from "../Card.jsx";

export function Home() {
    const title = "My ReactBlog";
    const {loading, data, error} = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=20&_delay=1000");

    useDocumentTitle(title);

    if (loading)
        return <Spinner />;

    if (error)
        return <Alert type="danger">{error.message}</Alert>;

    return (
        <>
            <h1 className="mb-3">{title}</h1>
            {data && <div className="row gap-4">
                {data.map(
                    (post) => (<div key={post.id} className="col-12 col-md-4">
                        <Card
                            title={post.title}
                            description={post.body}
                            buttonLabel="See Article"
                            href={`#post:${post.id}`}
                            image={`https://picsum.photos/id/${post.id}/200/180`}
                        />
                    </div>)
                )}
            </div>}
        </>
    )
}