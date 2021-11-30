export function customTheme(theme) {
    return {
        ...theme,
        colors: {
            ...theme.colors,
            primary25: 'grey',
            primary: 'black',
        }
    }
}