import * as vscode from 'vscode';

export class Statistics {
	data: number[] = [];
	max = 0;
	min = 0;
	sum = 0;
	average = 0;

	constructor(editor: vscode.TextEditor | undefined) {
		if (!editor) {
			return;
		}

		// get selected texts.
		let selectedTexts = editor.selections
			.map(s => editor.document.getText(s));

		// convert to array of numbers.
		let regex = /[+-]?\d+(\.\d+)?/g;
		this.data = selectedTexts
			.flatMap(t => t.match(regex))
			.filter(this.notNull) // skips null
			.map(parseFloat);

		if (this.data.length === 0) {
			return;
		}

		// calculate statistics.
		this.max = this.data.reduce((a, b) => a > b ? a : b);
		this.min = this.data.reduce((a, b) => a > b ? b : a);
		this.sum = this.data.reduce((sum, x) => sum + x, 0);
		this.average = this.sum / this.data.length;
	}

	private notNull<T>(item: T | null): item is T {
		return item !== null;
	}
}
