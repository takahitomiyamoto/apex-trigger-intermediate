# Lv. 2 の解答

`sfdx-project.json` に `packageAliases` を追加します。

##### sfdx-project.json

```json
{
  "packageDirectories": [
    {
      "path": "force-app",
      "default": true
    }
  ],
  "namespace": "",
  "sfdcLoginUrl": "https://login.salesforce.com",
  "sourceApiVersion": "49.0",
  "packageAliases": {
    "flexible-apex-trigger@1.0.2.0": "04t2x000003ugk5AAA"
  }
}
```

`flexible-apex-trigger@1.0.2.0` をインストールします。

```sh
sfdx force:package:install -p flexible-apex-trigger@1.0.2.0 -s AllUsers -u demo
sfdx force:package:install:report -i 0HfXXXXXXXXXXXXXXX -u demo
```

[Lv. 1](level-01-answer.md) で修正した Apex トリガを修正します。

##### AccountTrigger.trigger

```java
trigger AccountTrigger on Account(before insert, before update) {
  FAT_CommonTriggerHandler handler = FAT_CommonTriggerHandler.create(Account.class);
  handler.invoke();
}
```

コードをフォーマットします。

```sh
yarn prettier
```

スクラッチ組織へプッシュします。

```sh
sfdx force:source:push -u demo
```

スクラッチ組織を開きます。

```sh
sfdx force:org:open -u demo -p lightning/o/Account/list
```

新規ボタンから取引先レコードを新規作成し、想定通りの挙動かどうかを確認しましょう。
また、そのレコードを更新し、想定通りの挙動かどうかを確認しましょう。

... いかがでしたか？
