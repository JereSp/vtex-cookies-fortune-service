export const searchCookie = async (
    _: any,
    __: any,
    { clients: { masterdata } }: Context
) =>
    masterdata
        .scrollDocuments({
            dataEntity: "JS",
            fields: ["text", "id"],
        })
        .then(({ data }) => data);
