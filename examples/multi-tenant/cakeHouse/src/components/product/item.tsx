import { Card, Icons, ShowButton, DeleteButton } from "@pankod/refine";

import { IProduct } from "interfaces";

const { EditOutlined } = Icons;

type ProductItemProps = {
    item: IProduct;
    editShow: (id?: string | undefined) => void;
};

const { Meta } = Card;

export const ProductItem: React.FC<ProductItemProps> = ({ item, editShow }) => {
    const image = item.image.map((img: any) => {
        return img.url;
    });

    return (
        <Card
            style={{ width: 300 }}
            cover={<img alt="example" src={image} height="240" />}
            actions={[
                <EditOutlined key="edit" onClick={() => editShow(item.id)} />,
                <ShowButton
                    key="show"
                    size="small"
                    hideText
                    recordItemId={item.id}
                />,
                <DeleteButton
                    key="delete"
                    size="small"
                    hideText
                    recordItemId={item.id}
                />,
            ]}
        >
            <Meta
                className="ant-card-meta-title"
                title={item.title}
                description={item.description}
            />
        </Card>
    );
};
