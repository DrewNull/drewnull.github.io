export function classNames(
    value: Array<string | undefined>
): string | undefined {
    return value?.join(' ')
}
