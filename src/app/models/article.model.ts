export class Article {
    title: string;
    link: string;
    votes: number;
    voteUpInt: number;
    voteDownInt: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
        this.voteUpInt = 0;
        this.voteDownInt = 0;
    }

    voteUp(): void {
        this.votes += 1;
        this.voteUpInt += 1;
    }

    voteDown(): void {
        this.votes -= 1;
        this.voteDownInt += 1;
    }

    domain(): string {
        try {
            const domainPath = this.link.split('//')[1];
            return domainPath.split('/')[0];
        } catch (err) {
            return null;
        }

    }
}