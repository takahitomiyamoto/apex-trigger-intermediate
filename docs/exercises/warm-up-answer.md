# Warm-up 解答

`config/project-scratch-def.json` の中身を次の内容で書き換えます。

> [project-scratch-def.json](https://github.com/takahitomiyamoto/flexible-apex-trigger/blob/master/config/project-scratch-def.json)

スクラッチ組織を作成します。

```sh
sfdx force:org:create -a demo -d 7 -f config/project-scratch-def.json -s -t scratch -v DevHub
```

Apex トリガを作成します。

```sh
sfdx force:apex:trigger:create -d force-app/main/default/triggers -e "before insert" -n AccountTrigger -s Account -t ApexTrigger
```

##### AccountTrigger.trigger

```java
trigger AccountTrigger on Account(before insert) {
  for (Account account : Trigger.new) {
    account.Name = '[サンプル] ' + account.Name;
  }
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

新規ボタンから取引先レコードを新規作成し、想定通りの挙動かどうかを確認します。
