import {
    LRUCache,
    Service,
    ServiceContext,
    ParamsContext,
    RecorderState,
} from "@vtex/api";
import { Clients } from "./clients";
import { searchCookie } from "./resolvers/searchCookie";
import { addCookie } from "./resolvers/addCookie";
import { deleteCookie } from "./resolvers/deleteCookie";
import { searchRandomCookie } from "./resolvers/searchRandomCookie";

// Create a LRU memory cache for the Status client.
// The @vtex/api HttpClient respects Cache-Control headers and uses the provided cache.
const memoryCache = new LRUCache<string, any>({ max: 5000 });
metrics.trackCache("status", memoryCache);

declare global {
    type Context = ServiceContext<Clients, State>;

    interface State extends RecorderState {
        code: number;
    }
}

export default new Service<Clients, State, ParamsContext>({
    clients: {
        implementation: Clients,
        options: {
            default: {
                retries: 2,
                timeout: 10000,
            },
        },
    },
    graphql: {
        resolvers: {
            Query: {
                searchCookie,
                searchRandomCookie,
            },
            Mutation: {
                addCookie,
                deleteCookie,
            },
        },
    },
});
