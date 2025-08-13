/*interface IPost{
        title: string;
        author: string;
        tags: string[];
        content: string;
        createdTime: number;
}*/
interface IPost {
    id: number;
    userId: number;
    userName?: string;
    title: string;
    body: string;
    tags?: string[];
    createdTime?: number;
}

export type { IPost };
