export const searchRandomCookie = async (
    _: any,
    __: any,
    { clients: { masterdata } }: Context
) =>
    masterdata
        .searchDocuments({
            dataEntity: "JS",
            fields: ["id", "text"],
            pagination: { page: 1, pageSize: 1000 },
        })
        .then((data: any) => {
            const getRandomElement =
                data[Math.floor(Math.random() * data.length)];
            return getRandomElement;
        });
