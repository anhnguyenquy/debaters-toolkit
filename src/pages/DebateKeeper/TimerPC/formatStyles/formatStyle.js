export const formatStyle =  {
    placeholder: base => ({
        ...base,
        textAlign: "center !important",
        width: "100% !important",
        fontSize: "1rem",
        color: "hsl(0, 0%, 20%)"
    }),
    singleValue: base => ({
        ...base,
        width: "100%",
        textAlign: "center",
        marginLeft: "0.85rem !important"
    }),
    option: base => ({
        ...base,
        textAlign: "center"
    }),
}