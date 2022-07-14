import { Provider } from "../context/main";
import Main from "./main";

export default function Home() {
    return (
        <Provider>
            <Main></Main>
        </Provider>
    );
}
