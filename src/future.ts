export type Future<T> = { result: T } | { reason: { name: string, message: string, stack?: string } }

export default async function future<T>(promise: Promise<T>): Promise<Future<T>> {
    try {
        return {result: await promise}
    } catch (e: Error) {
        const {name, message, stack} = e
        return {reason: {name, message, stack}}
    }
}
