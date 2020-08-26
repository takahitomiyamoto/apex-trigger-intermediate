# Lv. 1 の解答

Apex トリガを修正します。

##### AccountTrigger.trigger

```java
trigger AccountTrigger on Account(before insert, before update) {
  switch on Trigger.operationType {
    when BEFORE_INSERT {
      for (Account account : Trigger.new) {
        // Action (1)
        account.Name = '[サンプル] ' + account.Name;

        // Action (2)
        switch on account.Rating {
          when 'Hot' {
            account.CustomerPriority__c = 'High';
          }
          when 'Warm' {
            account.CustomerPriority__c = 'Medium';
          }
          when 'Cold' {
            account.CustomerPriority__c = 'Low';
          }
          when else {
          }
        }
      }
    }
    when BEFORE_UPDATE {
      for (Account account : Trigger.new) {
        // Action (2)
        switch on account.Rating {
          when 'Hot' {
            account.CustomerPriority__c = 'High';
          }
          when 'Warm' {
            account.CustomerPriority__c = 'Medium';
          }
          when 'Cold' {
            account.CustomerPriority__c = 'Low';
          }
          when else {
          }
        }
      }
    }
    when else {
    }
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

新規ボタンから取引先レコードを新規作成し、想定通りの挙動かどうかを確認しましょう。
また、そのレコードを更新し、想定通りの挙動かどうかを確認しましょう。
... いかがでしたか？
