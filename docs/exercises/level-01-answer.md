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
        String customerPriority = '';
        switch on account.Rating {
          when 'Hot' {
            customerPriority = 'High';
          }
          when 'Warm' {
            customerPriority = 'Medium';
          }
          when 'Cold' {
            customerPriority = 'Low';
          }
          when else {
          }
        }
        account.CustomerPriority__c = customerPriority;
      }
    }
    when BEFORE_UPDATE {
      for (Account account : Trigger.new) {
        String customerPriority = '';
        switch on account.Rating {
          when 'Hot' {
            customerPriority = 'High';
          }
          when 'Warm' {
            customerPriority = 'Medium';
          }
          when 'Cold' {
            customerPriority = 'Low';
          }
          when else {
          }
        }
        account.CustomerPriority__c = customerPriority;
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
