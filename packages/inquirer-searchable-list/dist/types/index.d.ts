/// <reference types="node" />
import Base from 'inquirer/lib/prompts/base';
import type { Answers, AsyncDynamicQuestionProperty, BaseChoiceMap, DistinctChoice, Question } from 'inquirer';
import type { Interface as ReadLineInterface } from 'readline';
declare module 'inquirer' {
    interface QuestionMap<T> {
        searchableList: QuestionItem<T> & {
            type: 'searchable-list';
        };
    }
}
declare type QuestionItem<T extends Answers = Answers> = Question<T> & {
    choices?: AsyncDynamicQuestionProperty<ReadonlyArray<DistinctChoice<T, BaseChoiceMap<T>>>, T>;
    pageSize?: number;
    id?: number;
    value?: unknown;
};
declare class SearchableListPrompt<T extends QuestionItem = QuestionItem> extends Base<T> {
    private pointer;
    private selected;
    private done;
    private list;
    private filterList;
    private paginator;
    private choicesToString;
    private rowRender;
    private rowFilter;
    constructor(question: T, readLine: ReadLineInterface, answers: Answers);
    render(error?: string): void;
    filterChoices(): void;
    onDownKey(): void;
    onUpKey(): void;
    onAllKey(): void;
    onEnd(state: any): void;
    onError(state: any): void;
    onKeyPress(): void;
    getCurrentItem(): QuestionItem<Answers>;
    getCurrentItemValue(): unknown;
    getCurrentItemName(): import("inquirer").KeyUnion<Answers> | undefined;
    _run(callback: (callback: any) => void): this;
}
export default SearchableListPrompt;
//# sourceMappingURL=index.d.ts.map