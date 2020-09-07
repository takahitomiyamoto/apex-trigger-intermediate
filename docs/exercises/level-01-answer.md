# Lv. 1 の解答

## アウトライン

- [1. Apex トリガを変更](#1-apex-トリガを変更)
  - [AccountTrigger.trigger](#accounttriggertrigger)

---

## 1. Apex トリガを変更

### AccountTrigger.trigger

1-1. [Warm-up](warm-up-answer.md#accounttriggertrigger) で作成した Apex トリガを変更します。

**AccountTrigger.trigger**

```java
trigger AccountTrigger on Account(before insert, before update) {
  switch on Trigger.operationType {
    when BEFORE_INSERT {
      for (Account account : Trigger.new) {
        // Action (1)
        account.Name = '[サンプル] ' + account.Name;
      }
    }
    when BEFORE_UPDATE {
    }
    when else {
    }
  }
}
```

1-2. アクション (2) を `BEFORE_INSERT` および `BEFORE_UPDATE` に追加します。

**AccountTrigger.trigger**

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
    when else {
    }
  }
}
```

1-3. コードをフォーマットします。

```sh
yarn prettier
```

1-4. スクラッチ組織へプッシュします。

```sh
sfdx force:source:push -u demo
```

1-5. スクラッチ組織を開きます。

```sh
sfdx force:org:open -u demo -p lightning/o/Account/list
```

1-6. 新規ボタンから取引先レコードを新規作成し、想定通りの挙動かどうかを確認しましょう。
また、そのレコードを更新し、想定通りの挙動かどうかを確認しましょう。

... いかがでしたか？
