# VS Code Extensions

さきほど VS Code の拡張機能の Salesforce Extension Pack をインストールしましたが、他にも開発に欠かせない拡張機能が豊富に存在します。
ぜひインストールしましょう。

| No. | 必須 | 名前                                                                                                           | オススメポイント                             |
| :-- | :--: | :------------------------------------------------------------------------------------------------------------- | :------------------------------------------- |
| 1   |  Y   | [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) | 括弧のペアを色付きで把握できる               |
| 2   |  Y   | [Codey Midnight](https://marketplace.visualstudio.com/items?itemName=salesforce.codey-midnight)                | Salesforce 開発にぴったりのダークテーマ      |
| 3   |  Y   | [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)        | コードを綺麗に整形してくれる                 |
| 4   |  Y   | [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)                         | TODO コメントを一覧化できる                  |
| 5   |  Y   | [Trailing Spaces](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces)              | 余分なスペースを削除してくれる               |
| 6   |  Y   | [zenkaku](https://marketplace.visualstudio.com/items?itemName=mosapride.zenkaku)                               | 余分な全角スペースをハイライトしてくれる     |
| 7   |      | [Apex PMD](https://marketplace.visualstudio.com/items?itemName=chuckjonas.apex-pmd)                            | Apex コードの静的解析を実行できる            |
| 8   |      | [Codey High Noon](https://marketplace.visualstudio.com/items?itemName=salesforce.codey-high-noon)              | Salesforce 開発にぴったりのライトテーマ      |
| 9   |      | [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)              | Git のコミットの履歴を追跡しやすくなる       |
| 10  |      | [Live HTML Previewer](https://marketplace.visualstudio.com/items?itemName=hdg.live-html-previewer)             | HTML をプレビューできる                      |
| 11  |      | [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)                   | リアルタイムにコードを共有して共同作業できる |
| 12  |      | [Output Colorizer](https://marketplace.visualstudio.com/items?itemName=IBM.output-colorizer)                   | ログに色付けしてくれる                       |

## ユーザ設定

インストールした拡張機能の各種設定を有効化しましょう。
次のキーボードのショートカットで Settings を開き、右上のアイコン「Open Settings (JSON)」をクリックします。

- MacOS : command + ,
- Windows : Ctrl + ,

以下の JSON を貼り付けて保存しましょう。

- [settings.json](https://github.com/takahitomiyamoto/flexible-apex-trigger/blob/master/.vscode/settings.json)

## Prettier 設定

「VSCodeQuickstart」プロジェクトのルートに既に自動生成されているファイルの中身を以下で置き換えましょう。

> [.prettierrc](https://github.com/takahitomiyamoto/flexible-apex-trigger/blob/master/.prettierrc)

> [.prettierignore](https://github.com/takahitomiyamoto/flexible-apex-trigger/blob/master/.prettierignore)

## ESLint 設定

「VSCodeQuickstart」プロジェクトのルートには存在していないので、次のファイルを新規作成しましょう。

> [.eslintrc.json](https://github.com/takahitomiyamoto/flexible-apex-trigger/blob/master/.eslintrc.json)

> [.eslintignore](https://github.com/takahitomiyamoto/flexible-apex-trigger/blob/master/.eslintignore)
