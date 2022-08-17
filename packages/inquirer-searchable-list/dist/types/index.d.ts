/// <reference types="node" />
import Base from 'inquirer/lib/prompts/base';
import type { Answers, Question } from 'inquirer';
import type { Interface as ReadLineInterface } from 'readline';
declare type QuestionItem = Question<Answers> & {
    id: number;
    pageSize?: number;
    value?: unknown;
};
declare class SearchableListPrompt<T extends QuestionItem = QuestionItem> extends Base<T> {
    private pointer;
    private selected;
    private done;
    private list;
    private filterList;
    private paginator;
    private renderRow;
    private filterRow;
    constructor(question: T, readLine: ReadLineInterface, answers: Answers);
    render(error?: string): void;
    filterChoices(): void;
    onDownKey(): void;
    onUpKey(): void;
    onAllKey(): void;
    onEnd(state: any): void;
    onError(state: any): void;
    onKeyPress(): void;
    getCurrentItem(): QuestionItem;
    getCurrentItemValue(): unknown;
    getCurrentItemName(): import("inquirer").KeyUnion<Answers> | undefined;
    _run(callback: (callback: any) => void): this;
}
export default SearchableListPrompt;
//# sourceMappingURL=index.d.ts.map