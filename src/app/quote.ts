// export class Quote {
//      id!: number;
//      quote!: string;
//      author!: string;
//      editor!: string;
//      duration!: Date;
//      upvotes!: number;
//      downvotes!: number;
// }

export class Quote {
    showDetails: boolean;
    constructor(
    public id: number,
    public quote: string,
    public author: string,
    public editor: string,
    public creationDate:Date,
    public upvotes: number,
    public downvotes: number
    )
    {
        this.showDetails=false;
    }
}
