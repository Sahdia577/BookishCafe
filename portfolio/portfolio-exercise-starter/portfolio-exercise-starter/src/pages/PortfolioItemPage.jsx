export const PortfolioItemPage = ({ item }) => {
    return (
        <>
            <p>{item.title}</p>
            <img src={item.imageUrl} width="150" height="100" />
            <p>{item.description}</p>
        </>
    );
};