export function mockResponseTime(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
