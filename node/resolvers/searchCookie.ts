export const searchCookie = async (
    _: any,
    __: any,
    { clients: { masterdata } }: Context
) =>
    masterdata.searchDocuments({
        dataEntity: "JS",
        fields: ["text", "id"],
        pagination: {
            page: 1,
            pageSize: 99,
        },
    });
// .then(({ data:any }) => data);
