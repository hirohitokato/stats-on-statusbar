import * as vscode from 'vscode';
import { Statistics } from './statistics';

let myStatusBarItem: vscode.StatusBarItem;
var isActive = true;

export function activate(context: vscode.ExtensionContext) {

	// register a command that is invoked when the status bar item is selected
	const myCommandId = 'sample.showSelectionCount';
	context.subscriptions.push(vscode.commands.registerCommand(myCommandId, () => {
		// toggle enable/disable
		isActive = !isActive;
		updateStatusBarItem();
	}));

	// create a new status bar item that we can now manage
	myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 10);
	myStatusBarItem.command = myCommandId;
	context.subscriptions.push(myStatusBarItem);

	// register some listener that make sure the status bar item always up-to-date
	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateStatusBarItem));
	context.subscriptions.push(vscode.window.onDidChangeTextEditorSelection(updateStatusBarItem));

	// update status bar item once at start
	updateStatusBarItem();
}

function updateStatusBarItem(): void {
	myStatusBarItem.text = "📊";
	myStatusBarItem.show();

	if (!isActive) {
		return;
	}

	let stat = new Statistics(vscode.window.activeTextEditor);
	if (stat.data.length > 0) {
		myStatusBarItem.text = getStatText(stat);
	}
}

function getStatText(stat: Statistics): string {
	let s = stat.data.length > 1 ? "s" : "";
	return `[${stat.data.length} value${s}, `
		+ `min:${humanize(stat.min)}, max:${humanize(stat.max)}, `
		+ `∑:${humanize(stat.sum)}, `
		+ `avg:${humanize(stat.average)}]`;
}

function humanize(x: number): string {
	return x.toFixed(2).replace(/\.?0*$/, '');
}

// this method is called when your extension is deactivated
export function deactivate() { }

