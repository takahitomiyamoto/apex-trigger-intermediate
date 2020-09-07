# Lv. 3 の解答

---

## アウトライン

- [1. Apex テストクラスを作成](#1-apex-テストクラスを作成)
  - [AccountTriggerServiceTest.cls](#accounttriggerservicetestcls)
- [2. Apex テストクラスを作成](#2-apex-テストクラスを作成)
  - [AccountTestUtils.cls](#accounttestutilscls)
  - [AccountTriggerTest.cls](#accounttriggertestcls)

---

## 1. Apex テストクラスを作成

1-1. Apex テストを実行して現在のコードカバー率を確認します。

```sh
export SFDX_IMPROVED_CODE_COVERAGE="true"

sfdx force:apex:test:run -c -l RunLocalTests -r human -u demo
```

```sh
=== Apex Code Coverage
ID                  NAME                           % COVERED  UNCOVERED LINES
──────────────────  ─────────────────────────────  ─────────  ───────────────────────────────────────────────
01p1m000000dNwKAAU  FAT_CommonConstants            NaN%
01p1m000000dNwLAAU  FAT_CommonError                100%
01p1m000000dNwNAAU  FAT_CommonLogger               100%
01p1m000000dNwOAAU  FAT_CommonLoggerConstants      100%
01p1m000000dNwPAAU  FAT_CommonLoggerHelper         100%
01p1m000000dNwTAAU  FAT_CommonTriggerHandler       88%        160,190,193,196,199,200,203,204,207,208,216,217
01p1m000000dNwVAAU  FAT_CommonTriggerHelper        100%
01p1m000000dNwYAAU  FAT_CommonUtils                100%
01q1m000000EAWXAA4  FAT_LoggerEventTrigger         100%
01p1m000000dNwbAAE  FAT_LoggerEventTriggerService  100%

=== Test Summary
NAME                 VALUE
───────────────────  ─────────────────────────────────────────────────────────
Outcome              Passed
Tests Ran            44
Passing              44
Failing              0
Skipped              0
Pass Rate            100%
Fail Rate            0%
Test Run Coverage    96%
Org Wide Coverage    90%
```

### AccountTriggerServiceTest.cls

1-2. `AccountTriggerService.cls` のテストクラスを作成します。

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n AccountTriggerServiceTest -t ApexUnitTest
```

**AccountTriggerServiceTest.cls**

```java
@isTest(SeeAllData=false)
private class AccountTriggerServiceTest {
  private static AccountTriggerService service = new AccountTriggerService();
  private static FAT_CommonTriggerHandler handler = FAT_CommonTriggerHandler.create(
    Account.class
  );

  @isTest
  static void addPrefixToName() {
    List<Account> accounts = new List<Account>();
    Account account = new Account();
    account.Name = 'Demo';
    accounts.add(account);

    Test.startTest();
    service.addPrefixToName(accounts);
    Test.stopTest();

    System.assertEquals('[サンプル] Demo', accounts[0].Name, 'addPrefixToName');
  }

  @isTest
  static void setCustomerPriorityHigh() {
    List<Account> accounts = new List<Account>();
    Account account = new Account();
    account.Rating = 'Hot';
    accounts.add(account);

    Test.startTest();
    service.setCustomerPriority(accounts);
    Test.stopTest();

    System.assertEquals(
      'High',
      accounts[0].CustomerPriority__c,
      'setCustomerPriorityHigh'
    );
  }

  @isTest
  static void setCustomerPriorityMedium() {
    List<Account> accounts = new List<Account>();
    Account account = new Account();
    account.Rating = 'Warm';
    accounts.add(account);

    Test.startTest();
    service.setCustomerPriority(accounts);
    Test.stopTest();

    System.assertEquals(
      'Medium',
      accounts[0].CustomerPriority__c,
      'setCustomerPriorityMedium'
    );
  }

  @isTest
  static void setCustomerPriorityLow() {
    List<Account> accounts = new List<Account>();
    Account account = new Account();
    account.Rating = 'Cold';
    accounts.add(account);

    Test.startTest();
    service.setCustomerPriority(accounts);
    Test.stopTest();

    System.assertEquals(
      'Low',
      accounts[0].CustomerPriority__c,
      'setCustomerPriorityLow'
    );
  }

  @isTest
  static void onBeforeInsert() {
    List<Account> accounts = new List<Account>();
    handler.newObjects = accounts;

    Test.startTest();
    service.onBeforeInsert(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onBeforeInsert');
  }

  @isTest
  static void onBeforeUpdate() {
    List<Account> accounts = new List<Account>();
    handler.newObjects = accounts;

    Test.startTest();
    service.onBeforeUpdate(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onBeforeInsert');
  }

  @isTest
  static void onBeforeDelete() {
    Test.startTest();
    service.onBeforeDelete(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onBeforeDelete');
  }

  @isTest
  static void onAfterInsert() {
    Test.startTest();
    service.onAfterInsert(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onAfterInsert');
  }

  @isTest
  static void onAfterUpdate() {
    Test.startTest();
    service.onAfterUpdate(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onAfterUpdate');
  }

  @isTest
  static void onAfterDelete() {
    Test.startTest();
    service.onAfterDelete(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onAfterDelete');
  }

  @isTest
  static void onAfterUndelete() {
    Test.startTest();
    service.onAfterUndelete(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onAfterUndelete');
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

1-5. Apex テストを実行して現在のコードカバー率を確認します。

```sh
export SFDX_IMPROVED_CODE_COVERAGE="true"

sfdx force:apex:test:run -c -l RunLocalTests -r human -u demo
```

```sh
=== Apex Code Coverage
ID                  NAME                           % COVERED  UNCOVERED LINES
──────────────────  ─────────────────────────────  ─────────  ───────────────────────────────────────────────
01p1m000000dNwKAAU  FAT_CommonConstants            NaN%
01p1m000000dNwLAAU  FAT_CommonError                100%
01p1m000000dNwNAAU  FAT_CommonLogger               100%
01p1m000000dNwOAAU  FAT_CommonLoggerConstants      100%
01p1m000000dNwPAAU  FAT_CommonLoggerHelper         100%
01p1m000000dNwTAAU  FAT_CommonTriggerHandler       88%        160,190,193,196,199,200,203,204,207,208,216,217
01p1m000000dNwVAAU  FAT_CommonTriggerHelper        100%
01p1m000000dNwYAAU  FAT_CommonUtils                100%
01q1m000000EAWXAA4  FAT_LoggerEventTrigger         100%
01p1m000000dNwbAAE  FAT_LoggerEventTriggerService  100%
01p1m000000dO0mAAE  AccountTriggerService          100%

=== Test Summary
NAME                 VALUE
───────────────────  ─────────────────────────────────────────────────────────
Outcome              Passed
Tests Ran            55
Passing              55
Failing              0
Skipped              0
Pass Rate            100%
Fail Rate            0%
Test Run Coverage    97%
Org Wide Coverage    96%
```

---

## 2. Apex テストクラスを作成

2-1. AccountTrigger.trigger のコードカバー率を向上させるために起動条件を追加します。
安心してください、カスタムメタデータ型で制御しているため実際の動作には影響ありません。

```java
trigger AccountTrigger on Account(
  before insert,
  before update,
  before delete,
  after insert,
  after update,
  after delete,
  after undelete
) {
  FAT_CommonTriggerHandler handler = FAT_CommonTriggerHandler.create(
    Account.class
  );
  handler.invoke();
}
```

### AccountTestUtils.cls

2-2. `AccountTrigger.trigger` のテストクラスを作成します。

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n AccountTestUtils -t ApexUnitTest
```

**AccountTestUtils.cls**

```java
@SuppressWarnings('PMD.ApexDoc')
@isTest(SeeAllData=false)
public with sharing class AccountTestUtils {
  public static List<Account> createNormalAccounts() {
    List<Account> accounts = new List<Account>();

    Account account1 = new Account();
    account1.Name = 'Demo1';
    account1.Rating = 'Hot';
    accounts.add(account1);

    return accounts;
  }

  public static List<Account> selectAccounts() {
    return [
      SELECT Id, Name, Rating, CustomerPriority__c
      FROM Account
      ORDER BY Name ASC
      LIMIT 50000
    ];
  }

  public static void insertAccounts(List<Account> accounts) {
    List<Database.SaveResult> results = Database.insert(accounts, false);
  }

  public static void updateAccounts(List<Account> accounts) {
    List<Database.SaveResult> results = Database.update(accounts, false);
  }

  public static void deleteAccounts(List<Account> accounts) {
    List<Database.DeleteResult> results = Database.delete(accounts, false);
  }

  public static void undeleteAccounts(List<Account> accounts) {
    List<Database.UndeleteResult> results = Database.undelete(accounts, false);
  }
}
```

### AccountTriggerTest.cls

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n AccountTriggerTest -t ApexUnitTest
```

**AccountTriggerTest.cls**

```java
@isTest(SeeAllData=false)
private class AccountTriggerTest {
  @testSetup
  static void setup() {
    List<Account> accounts = AccountTestUtils.createNormalAccounts();
    AccountTestUtils.insertAccounts(accounts);
  }

  @isTest
  static void invokeUpdate() {
    List<Account> accounts = AccountTestUtils.selectAccounts();

    Test.startTest();
    AccountTestUtils.updateAccounts(accounts);
    Test.stopTest();

    System.assertNotEquals(0, accounts.size(), 'invokeUpdate');
  }

  @isTest
  static void invokeDelete() {
    List<Account> accounts = AccountTestUtils.selectAccounts();
    AccountTestUtils.deleteAccounts(accounts);

    Test.startTest();
    AccountTestUtils.undeleteAccounts(accounts);
    Test.stopTest();

    System.assertNotEquals(0, accounts.size(), 'invokeDelete');
  }

  @isTest
  static void invokeException() {
    // TODO
  }
}
```

2-3. コードをフォーマットします。

```sh
yarn prettier
```

2-4. スクラッチ組織へプッシュします。

```sh
sfdx force:source:push -u demo
```

2-5. Apex テストを実行して現在のコードカバー率を確認します。

```sh
export SFDX_IMPROVED_CODE_COVERAGE="true"

sfdx force:apex:test:run -c -l RunLocalTests -r human -u demo
```

```sh
=== Apex Code Coverage
ID                  NAME                           % COVERED  UNCOVERED LINES
──────────────────  ─────────────────────────────  ─────────  ───────────────
01p1m000000dNwKAAU  FAT_CommonConstants            NaN%
01p1m000000dNwLAAU  FAT_CommonError                100%
01p1m000000dNwYAAU  FAT_CommonUtils                100%
01p1m000000dNwOAAU  FAT_CommonLoggerConstants      100%
01p1m000000dNwNAAU  FAT_CommonLogger               100%
01p1m000000dNwPAAU  FAT_CommonLoggerHelper         100%
01p1m000000dNwTAAU  FAT_CommonTriggerHandler       98%        216,217
01p1m000000dNwVAAU  FAT_CommonTriggerHelper        100%
01q1m000000EAWXAA4  FAT_LoggerEventTrigger         100%
01p1m000000dNwbAAE  FAT_LoggerEventTriggerService  100%
01q1m000000E9UvAAK  AccountTrigger                 100%
01p1m000000dO0mAAE  AccountTriggerService          100%

=== Test Summary
NAME                 VALUE
───────────────────  ─────────────────────────────────────────────────────────
Outcome              Passed
Tests Ran            58
Passing              58
Failing              0
Skipped              0
Pass Rate            100%
Fail Rate            0%
Test Run Coverage    99%
Org Wide Coverage    99%
```

コードカバー率 100%まであと 1%です。後ほど対応しましょう。

...いかがでしょう、だいぶテストクラスが書きやすくなっていませんか？
もしもトリガからビジネスロジックを分離していなかったら、ビジネスロジックをテストするためにわざわざ insert などして無理やり Apex トリガを起動させないといけませんでした。

今回はビジネスロジックに集中してテストコードを書けば良くなっているので、ちゃんと細かく単体テストしてる気持ちになれるのではないでしょうか。
将来ビジネスロジックが複雑になったとしても、ホワイトボックステストを書きやすいですよね。
