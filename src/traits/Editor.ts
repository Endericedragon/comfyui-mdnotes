interface Editor<T> {
    create(rootElemId: string, mdContent: string, cdnURL: string): T;
    getMarkdownContent(): string;
    getScrollTop(): number;
    setScrollTop(x: number): void;
}

export { Editor }