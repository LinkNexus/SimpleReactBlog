import {useHashNavigation} from "./hooks/useHashNavigation.js";
import {Home} from "./components/pages/Home.jsx";
import {Contact} from "./components/pages/Contact.jsx";
import {NotFound} from "./components/pages/NotFound.jsx";
import {Header} from "./components/Header.jsx";
import {Single} from "./components/pages/Single.jsx";
import {ErrorBoundary} from "react-error-boundary";
import {Alert} from "./components/Alert.jsx";

function App() {

    const { page, param } = useHashNavigation();
    const pageContent = getPageContent(page, param);

    return (
        <>
            <Header page={page} />
            <div className="container my-3">
                <ErrorBoundary FallbackComponent={PageError}>
                    { pageContent }
                </ErrorBoundary>
            </div>
        </>
    )
}

function PageError({error}) {
    return <Alert type="danger">{error.toString()}</Alert>;
}

function getPageContent(page, param) {
    switch (page) {
        case "home":
            return <Home />;

        case "post":
            return <Single postId={param} />;

        case "contact":
            return <Contact />;

        default:
            return <NotFound page={page} />;
    }
}

export default App
