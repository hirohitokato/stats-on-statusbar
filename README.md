# Quick stats on statusbar 📊

A Visual Studio Code extension to quickly show the statistics of numbers in the selected text.

## Features

![animation](https://github.com/hirohitokato/myAssets/raw/main/stats-on-statusbar/demo.gif)

Shows the following statistics information on the status bar, of the numbers included in your selected text.

* maximum value
* minimum value
* sum
* average

To quickly see how numbers in selected text add up, take a look at the status bar below your editor.

When you select text that contains numeric data, the extension automatically summarizes that data and shows these values on the status bar. The extension also automatically extract numbers in the text.

* `1, 3 4 5` → 1, 3, 4, 5 will be extracted
* `On July 15, 2003 the Japanese Wikipedia reached 10000 articles, four months and three days after the 1000-article milestone, beating the time it took the English Wikipedia to achieve the same feat.` → 15, 2003, 10000, 1000 will be extracted

These values update immediately when you select a different range of text.

## Requirements

Nothing.

## Extension Settings

Nothing.

To toggle enable / disable of this, click 📊 icon or information area on the status bar.

## Known Issues

* Please let me know via [Issues](https://github.com/hirohitokato/stats-on-statusbar/issues)

## Release Notes

See the [CHANGELOG.md](CHANGELOG.md).

Enjoy!
