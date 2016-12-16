export function dispatchAction(type = '', payload = {}, meta = null, error = null) {
    return {
        type, payload, meta, error
    };
}