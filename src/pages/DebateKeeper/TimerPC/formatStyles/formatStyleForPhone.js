export const formatStyleForPhone =  {
    placeholder: base => ({
        ...base,
        textAlign: "center !important",
        width: "100% !important",
        fontSize: "0.85rem"
    }),
    singleValue: base => ({
        ...base,
        width: "100%",
        textAlign: "center",
        marginLeft: "0.9rem !important",
        fontSize: "0.85rem"
    }),
    option: base => ({
        ...base,
        textAlign: "center"
    }),
}