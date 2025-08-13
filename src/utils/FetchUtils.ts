import type { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import type { SerializedError } from "@reduxjs/toolkit/react";

function getFetchMessage(
    isLoading: boolean,
    isError: boolean,
    error?: FetchBaseQueryError | SerializedError
) {
    if (isLoading) {
        return "Data is loading...";
    } else if (isError) {
        console.error(error);
        return "Data error";
    }
}

export { getFetchMessage };
