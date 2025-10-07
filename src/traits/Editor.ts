interface Editor {
    // constructor(rootElemId: string, mdContent: string, cdnURL: string): Editor<T>;
    getMarkdownContent(): string;
    getScrollTop(): number;
    setScrollTop(x: number): void;
    gc(): void;
}

export { Editor }