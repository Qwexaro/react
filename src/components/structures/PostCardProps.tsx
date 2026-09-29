export type PostCardProps = {

    id: number,

    author: string,

    title: string,

    text: string,

    onDelete: (id: number) => void;

}