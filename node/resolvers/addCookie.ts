export const addCookie = async (
    _: any,
    args: any,
    { clients: { masterdata } }: Context
) =>
    masterdata
        .createDocument({
            dataEntity: "JS",
            fields: args,
        })
        .then(() => true)
        .catch(() => false);
