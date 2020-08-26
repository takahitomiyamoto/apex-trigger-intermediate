# Node.js & Yarn

## インストール

Prettier の一括実行など各種コマンドを実行するために、Node.js をインストールしましょう。
次の URL からインストーラーをダウンロードしてください。基本的に LTS バージョンで十分です。

- [Node.js](https://nodejs.org/ja/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable)

インストーラーをダブルクリックし、デフォルトのままインストールを完了させてください。

## 確認

次のコマンドでインストールが正常に完了していることを確認しましょう。
バージョンが表示されれば OK です。

```sh
node -v
npm -v
yarn -v
```

## 設定

「VSCodeQuickstart」プロジェクトのルートには存在していないので、次のファイルを新規作成しましょう。

> [package.json](https://github.com/takahitomiyamoto/flexible-apex-trigger/blob/master/package.json)

## npm パッケージのインストール

以下のコマンドを実行して、npm パッケージをインストールしましょう。

```sh
yarn install
```
