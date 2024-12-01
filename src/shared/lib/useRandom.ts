export const useRandom = (from = 0, to: number) => {
    const r = Math.trunc(Math.random() * 10 ** 15)
    return from + r % (to + 1)
}