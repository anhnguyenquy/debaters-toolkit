export const formatStyleForExtraSmall =  {
    placeholder: base => ({
        ...base,
        textAlign: "center !important",
        width: "100% !important",
        fontSize: "0.8rem"
    }),
    singleValue: base => ({
        ...base,
        width: "100%",
        textAlign: "center",
        marginLeft: "1.1rem !important",
        fontSize: "0.8rem"
    }),
    option: base => ({
        ...base,
        textAlign: "center",
        fontSize: "0.8rem"
    }),
}