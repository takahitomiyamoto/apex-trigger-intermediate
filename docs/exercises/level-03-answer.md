# Lv. 3 の解答

Apex テストを実行して現在のコードカバー率を確認します。

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

Apex クラスを作成します。

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n AccountTriggerServiceTest -t ApexUnitTest
```

##### AccountTriggerServiceTest.cls

```java
@isTest(SeeAllData=false)
private class AccountTriggerServiceTest {
  private static AccountTriggerService service = new AccountTriggerService();

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
    Account account = new Account();
    account.Name = 'Demo';
    account.Rating = 'Hot';
    accounts.add(account);

    FAT_CommonTriggerHandler handler = FAT_CommonTriggerHandler.create(
      Account.class
    );
    handler.newObjects = accounts;

    Test.startTest();
    service.onBeforeInsert(handler);
    Test.stopTest();

    System.assertEquals('[サンプル] Demo', accounts[0].Name, 'onBeforeInsert');
    System.assertEquals(
      'High',
      accounts[0].CustomerPriority__c,
      'onBeforeInsert'
    );
  }

  @isTest
  static void onBeforeUpdate() {
    List<Account> accounts = new List<Account>();
    Account account = new Account();
    account.Name = 'Demo';
    account.Rating = 'Hot';
    accounts.add(account);

    FAT_CommonTriggerHandler handler = FAT_CommonTriggerHandler.create(
      Account.class
    );
    handler.newObjects = accounts;

    Test.startTest();
    service.onBeforeUpdate(handler);
    Test.stopTest();

    System.assertEquals('Demo', accounts[0].Name, 'onBeforeUpdate');
    System.assertEquals(
      'High',
      accounts[0].CustomerPriority__c,
      'onBeforeUpdate'
    );
  }

  @isTest
  static void onBeforeDelete() {
    FAT_CommonTriggerHandler handler = FAT_CommonTriggerHandler.create(
      Account.class
    );

    Test.startTest();
    service.onBeforeDelete(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onBeforeDelete');
  }

  @isTest
  static void onAfterInsert() {
    FAT_CommonTriggerHandler handler = FAT_CommonTriggerHandler.create(
      Account.class
    );

    Test.startTest();
    service.onAfterInsert(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onAfterInsert');
  }

  @isTest
  static void onAfterUpdate() {
    FAT_CommonTriggerHandler handler = FAT_CommonTriggerHandler.create(
      Account.class
    );

    Test.startTest();
    service.onAfterUpdate(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onAfterUpdate');
  }

  @isTest
  static void onAfterDelete() {
    FAT_CommonTriggerHandler handler = FAT_CommonTriggerHandler.create(
      Account.class
    );

    Test.startTest();
    service.onAfterDelete(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onAfterDelete');
  }

  @isTest
  static void onAfterUndelete() {
    FAT_CommonTriggerHandler handler = FAT_CommonTriggerHandler.create(
      Account.class
    );

    Test.startTest();
    service.onAfterUndelete(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onAfterUndelete');
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

Apex テストを実行して現在のコードカバー率を確認します。

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
