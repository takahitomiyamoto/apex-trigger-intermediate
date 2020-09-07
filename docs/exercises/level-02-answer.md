# Lv. 2 の解答

## アウトライン

- [1. フレームワークをインストール](#1-フレームワークをインストール)
  - [flexible-apex-trigger](#flexible-apex-trigger)
- [2. Apex トリガを変更](#2-apex-トリガを変更)
  - [AccountTrigger.trigger](#accounttriggertrigger)
- [3. Apex クラスを作成](#3-apex-クラスを作成)
  - [AccountTriggerService.cls](#accounttriggerservicecls)
- [4. カスタムメタデータ型を追加](#4-カスタムメタデータ型を追加)
  - [FAT_TriggerObserver.AccountTriggerService.md-meta.xml](#fattriggerobserveraccounttriggerservicemd-metaxml)

## 1. フレームワークをインストール

1-1. `sfdx-project.json` に `packageAliases` を追加します。

**sfdx-project.json**

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
    "flexible-apex-trigger@1.0.6.0": "04t2x000003uvUXAAY"
  }
}
```

### flexible-apex-trigger

1-2. `flexible-apex-trigger@1.0.6.0` をインストールします。

```sh
sfdx force:package:install -p flexible-apex-trigger@1.0.6.0 -s AllUsers -u demo
sfdx force:package:install:report -i 0HfXXXXXXXXXXXXXXX -u demo
```

## 2. Apex トリガを変更

### AccountTrigger.trigger

2-1. [Lv. 1](level-01-answer.md#accounttriggertrigger) で変更した Apex トリガを更に変更します。

**AccountTrigger.trigger**

```java
trigger AccountTrigger on Account(before insert, before update) {
  FAT_CommonTriggerHandler handler = FAT_CommonTriggerHandler.create(Account.class);
  handler.invoke();
}
```

## 3. Apex クラスを作成

### AccountTriggerService.cls

3-1. Apex クラスを作成します。

```sh
sfdx force:apex:class:create -d force-app/main/default/classes -n AccountTriggerService -t DefaultApexClass
```

3-2. `FAT_ITriggerObserver` を実装します。

**AccountTriggerService.cls**

```java
@SuppressWarnings('PMD.EmptyStatementBlock,PMD.ApexDoc')
public with sharing class AccountTriggerService implements FAT_ITriggerObserver {
  public void onBeforeInsert(FAT_CommonTriggerHandler handler) {
  }

  public void onBeforeUpdate(FAT_CommonTriggerHandler handler) {
  }

  public void onBeforeDelete(FAT_CommonTriggerHandler handler) {
  }

  public void onAfterInsert(FAT_CommonTriggerHandler handler) {
  }

  public void onAfterUpdate(FAT_CommonTriggerHandler handler) {
  }

  public void onAfterDelete(FAT_CommonTriggerHandler handler) {
  }

  public void onAfterUndelete(FAT_CommonTriggerHandler handler) {
  }
}
```

3-3. `addPrefixToName` および `setCustomerPriority` を追加します。

**AccountTriggerService.cls**

```java
@SuppressWarnings('PMD.EmptyStatementBlock,PMD.ApexDoc')
public with sharing class AccountTriggerService implements FAT_ITriggerObserver {
  @TestVisible
  private void addPrefixToName(List<Account> accounts) {
    for (Account account : accounts) {
      account.Name = '[サンプル] ' + account.Name;
    }
  }

  @TestVisible
  private void setCustomerPriority(List<Account> accounts) {
    for (Account account : accounts) {
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

  public void onBeforeInsert(FAT_CommonTriggerHandler handler) {
  }

  public void onBeforeUpdate(FAT_CommonTriggerHandler handler) {
  }

  public void onBeforeDelete(FAT_CommonTriggerHandler handler) {
  }

  public void onAfterInsert(FAT_CommonTriggerHandler handler) {
  }

  public void onAfterUpdate(FAT_CommonTriggerHandler handler) {
  }

  public void onAfterDelete(FAT_CommonTriggerHandler handler) {
  }

  public void onAfterUndelete(FAT_CommonTriggerHandler handler) {
  }
}
```

3-4. `onBeforeInsert` から `addPrefixToName` および `setCustomerPriority` を呼び出し、`onBeforeUpdate` から `setCustomerPriority` を呼び出すようにします。

**AccountTriggerService.cls**

```java
@SuppressWarnings('PMD.EmptyStatementBlock,PMD.ApexDoc')
public with sharing class AccountTriggerService implements FAT_ITriggerObserver {
  @TestVisible
  private void addPrefixToName(List<Account> accounts) {
    for (Account account : accounts) {
      account.Name = '[サンプル] ' + account.Name;
    }
  }

  @TestVisible
  private void setCustomerPriority(List<Account> accounts) {
    for (Account account : accounts) {
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

  public void onBeforeInsert(FAT_CommonTriggerHandler handler) {
    this.addPrefixToName((List<Account>) handler.newObjects);
    this.setCustomerPriority((List<Account>) handler.newObjects);
  }

  public void onBeforeUpdate(FAT_CommonTriggerHandler handler) {
    this.setCustomerPriority((List<Account>) handler.newObjects);
  }

  public void onBeforeDelete(FAT_CommonTriggerHandler handler) {
  }

  public void onAfterInsert(FAT_CommonTriggerHandler handler) {
  }

  public void onAfterUpdate(FAT_CommonTriggerHandler handler) {
  }

  public void onAfterDelete(FAT_CommonTriggerHandler handler) {
  }

  public void onAfterUndelete(FAT_CommonTriggerHandler handler) {
  }
}
```

3-5. コードをフォーマットします。

```sh
yarn prettier
```

3-6. スクラッチ組織へプッシュします。

```sh
sfdx force:source:push -u demo
```

---

## 4. カスタムメタデータ型を追加

### FAT_TriggerObserver.AccountTriggerService.md-meta.xml

4-1. カスタムメタデータ型にレコードを追加するために、スクラッチ組織を開きます。

```sh
sfdx force:org:open -u demo -p lightning/setup/CustomMetadata/home
```

4-2. `FAT_TriggerObserver` の `レコードの管理` をクリックします。

![customMetadata](../images/level-02-answer-01.png)

4-3. `新規` をクリックします。

![customMetadata](../images/level-02-answer-02.png)

4-4. 情報を入力して `保存` をクリックします。

![customMetadata](../images/level-02-answer-03.png)

4-5. 取引先画面を開きます。

```sh
sfdx force:org:open -u demo -p lightning/o/Account/list
```

4-6. 新規ボタンから取引先レコードを新規作成し、想定通りの挙動かどうかを確認しましょう。
また、そのレコードを更新し、想定通りの挙動かどうかを確認しましょう。

... いかがでしたか？

---

<div style="text-align:center;font-size:120%;">
  &lt
  <a href="./level-02.md"><b>Prev</b></a>
  |
  <a href="./level-03.md"><b>Next</b></a>
  &gt
</div>

---
