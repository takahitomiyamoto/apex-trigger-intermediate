# Warm-up の解答

## アウトライン

- [1. Apex トリガを作成](#1-apex-トリガを作成)
  - [AccountTrigger.trigger](#accounttriggertrigger)

## 1. Apex トリガを作成

1-1. `config/project-scratch-def.json` の中身を次の内容で書き換えます。

> [project-scratch-def.json](https://github.com/takahitomiyamoto/flexible-apex-trigger/blob/master/config/project-scratch-def.json)

1-2. スクラッチ組織を作成します。

```sh
sfdx force:org:create -a demo -d 7 -f config/project-scratch-def.json -s -t scratch -v DevHub
```

### AccountTrigger.trigger

1-3. Apex トリガを作成します。

```sh
sfdx force:apex:trigger:create -d force-app/main/default/triggers -e "before insert" -n AccountTrigger -s Account -t ApexTrigger
```

**AccountTrigger.trigger**

```java
trigger AccountTrigger on Account(before insert) {
  for (Account account : Trigger.new) {
    account.Name = '[サンプル] ' + account.Name;
  }
}
```

1-4. コードをフォーマットします。

```sh
yarn prettier
```

1-5. スクラッチ組織へプッシュします。

```sh
sfdx force:source:push -u demo
```

1-6. スクラッチ組織を開きます。

```sh
sfdx force:org:open -u demo -p lightning/o/Account/list
```

1-7. 新規ボタンから取引先レコードを新規作成し、想定通りの挙動かどうかを確認しましょう。

... いかがでしたか？
