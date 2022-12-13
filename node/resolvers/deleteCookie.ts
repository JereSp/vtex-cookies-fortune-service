export const deleteCookie = async (
    _: any,
    args: any,
    { clients: { masterdata } }: Context
) =>
    masterdata
        .deleteDocument({
            dataEntity: "JS",
            id: args.id,
        })
        .then(() => true)
        .catch(() => false);
