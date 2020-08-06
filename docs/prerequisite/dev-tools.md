# 開発ツール

実は、最初の難関はここにあります。ここで挫折するかたが多いですので、じっくり取り組みましょう。

1. [Developer Edition 環境](#developer-edition-環境)
1. [Salesforce IDE](#salesforce-ide)
1. [VS Code Extensions](#vs-code-extensions)
1. [Java](#java)
1. [Node.js & Yarn](#nodejs--yarn)

---

## Developer Edition 環境

まず、Salesforce の無料の開発環境を入手しましょう。これを使って Trailhead にログインします。
すでに持っている場合は、次のセクションへ。

1. Google Chrome または Firefox を開く。（Internet Explorer は非推奨）
1. [https://developer.salesforce.com/signup](https://developer.salesforce.com/signup) へアクセスする。
1. 必要な情報を入力してサインアップする。
1. 件名「Salesforce へようこそ: アカウントを確認してください」のメールを開いて「アカウントを確認」をクリックする。
1. 好きなパスワードと秘密の質問を設定して「パスワードを変更」をクリックする。
1. 歯車アイコン > 「設定」をクリックする。
1. 左のペインで、「会社の設定」 > 「組織情報」をクリックする。
1. 「編集」をクリックする。
1. 「言語のデフォルト値」を "英語" に変更して「保存」をクリックする。

---

## Salesforce IDE

### Visual Studio Code のインストール

次の単元を通して、Salesforce の IDE（統合開発環境）として利用できる Visual Studio Code（VS Code）をインストールしましょう。

- [Visual Studio Code の使用開始](https://trailhead.salesforce.com/ja/content/learn/projects/quickstart-vscode-salesforce/start-vscode)

最後に「ステップを確認」のセクションがあるので、後続の手順で使うために Trailhead Playground を作成しておきましょう。

### Salesforce CLI と Salesforce Extension Pack のインストール

次の単元を通して、Salesforce CLI と Salesforce Extension Pack をインストールしましょう。

- [Visual Studio Code の Salesforce 対応](https://trailhead.salesforce.com/ja/content/learn/projects/quickstart-vscode-salesforce/vscode-salesforce-ready)

進めているうちに Trailhead Playground を作成する手順が出てきますが、前の単元で作成済みのものを起動して進めてください。
まだ作成中の場合はしばらく待ってください。

### Trailhead Playground のログインパスワードリセット

Trailhead サイトから Trailhead Playground を起動する際にはログインパスワードが不要です。
しかし、Trailhead サイト以外から Trailhead Playground へログインしたい場合には、ログイン ID とパスワードが必要です。

1. Trailhead サイトから Trailhead Playground を起動する。
1. 歯車アイコン > 「設定」をクリックする。
1. 左のペインで、「ユーザ」 > 「ユーザ」をクリックする。
1. 自分の氏名と同じユーザを探して、「ユーザ名」の値を手元にメモしておく。
1. 自分の氏名と同じユーザのチェックボックスをチェックし、「パスワードをリセット」をクリックする。
1. ポップアップ画面の「OK」をクリックする。
1. 件名「Your Developer Edition パスワードのリセット完了」のメールを開いて、本文のリンクをクリックする。
1. 件名「Salesforce で ID を確認」のメールに記載されている確認コードを入力して「検証」をクリックする。
1. 好きなパスワードを設定して「パスワードを変更」をクリックする。パスワードは手元にメモしておく。
1. 設定したパスワードでログインできるかどうか確かめる。
   - アストロのアイコン > 「ログアウト」をクリックする。
   - メモしたユーザ名とパスワードを入力して「ログイン」をクリックする。
   - 「携帯電話を登録」画面が表示された場合は、「電話を登録しません」をクリックする。

### Salesforce IDE の動作確認

次の単元を通して、IDE の動作確認をしてみましょう。

- [Salesforce 開発での Visual Studio Code の使用](https://trailhead.salesforce.com/ja/content/learn/projects/quickstart-vscode-salesforce/use-vscode-for-salesforce)

---

## VS Code Extensions

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

### ユーザ設定

インストールした拡張機能の各種設定を有効化しましょう。
次のキーボードのショートカットで Settings を開き、右上のアイコン「Open Settings (JSON)」をクリックします。

- MacOS : command + ,
- Windows : Ctrl + ,

以下の JSON を貼り付けて保存しましょう。

> [settings.json](https://github.com/takahitomiyamoto/flexible-apex-trigger/blob/master/.vscode/settings.json)

### Prettier 設定

「VSCodeQuickstart」プロジェクトのルートに既に自動生成されているファイルの中身を以下で置き換えましょう。

> [.prettierrc](https://github.com/takahitomiyamoto/flexible-apex-trigger/blob/master/.prettierrc)

> [.prettierignore](https://github.com/takahitomiyamoto/flexible-apex-trigger/blob/master/.prettierignore)

### ESLint 設定

「VSCodeQuickstart」プロジェクトのルートには存在していないので、次のファイルを新規作成しましょう。

> [.eslintrc.json](https://github.com/takahitomiyamoto/flexible-apex-trigger/blob/master/.eslintrc.json)

> [.eslintignore](https://github.com/takahitomiyamoto/flexible-apex-trigger/blob/master/.eslintignore)

---

## Java

Apex コードの入力補完など、Apex に関する拡張機能を使うためには、Java の Runtime のパスを settings.json の salesforcedx-vscode-apex.java.home に設定する必要があります。
まだ Java をインストールしていない場合は Zulu をインストールしましょう。

- [手順](https://developer.salesforce.com/tools/vscode/ja/getting-started/java-setup/#zulu)

---

## Node.js & Yarn

### インストール

Prettier の一括実行など各種コマンドを実行するために、Node.js をインストールしましょう。
次の URL からインストーラーをダウンロードしてください。基本的に LTS バージョンで十分です。

- [Node.js](https://nodejs.org/ja/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable)

インストーラーをダブルクリックし、デフォルトのままインストールを完了させてください。

### 確認

次のコマンドでインストールが正常に完了していることを確認しましょう。
バージョンが表示されれば OK です。

```sh
node -v
npm -v
yarn -v
```

### 設定

いま VS Code で開いている「VSCodeQuickstart」プロジェクトのルートに「package.json」ファイルを新規作成してください。

> [package.json](https://github.com/takahitomiyamoto/flexible-apex-trigger/blob/master/package.json)

### パッケージのバージョンアップ

以下のコマンドを実行して、パッケージのバージョンを最新化しましょう。

```sh
yarn install
yarn gulp:init
```
