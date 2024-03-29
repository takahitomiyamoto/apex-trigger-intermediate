# Lv. 5 の解答

---

## アウトライン

- [Lv. 5 の解答](#lv-5-の解答)
  - [アウトライン](#アウトライン)
  - [1. Apex トリガを作成](#1-apex-トリガを作成)
    - [OpportunityTrigger.trigger](#opportunitytriggertrigger)
    - [CaseTrigger.trigger](#casetriggertrigger)
  - [2. カスタム表示ラベルを追加](#2-カスタム表示ラベルを追加)
    - [CustomLabels.labels-meta.xml](#customlabelslabels-metaxml)
  - [3. Apex クラスを作成](#3-apex-クラスを作成)
    - [OpportunityTriggerValidation.cls](#opportunitytriggervalidationcls)
    - [CaseTriggerService.cls](#casetriggerservicecls)
  - [4. カスタムメタデータ型を作成](#4-カスタムメタデータ型を作成)
    - [FAT_TriggerObserver.OpportunityTriggerValidation.md-meta.xml](#fat_triggerobserveropportunitytriggervalidationmd-metaxml)
    - [FAT_TriggerObserver.CaseTriggerService.md-meta.xml](#fat_triggerobservercasetriggerservicemd-metaxml)
  - [5. Apex テストクラスを作成](#5-apex-テストクラスを作成)
    - [OpportunityTriggerValidationTest.cls](#opportunitytriggervalidationtestcls)
    - [OpportunityTestUtils.cls](#opportunitytestutilscls)
    - [OpportunityTriggerTest.cls](#opportunitytriggertestcls)
    - [CaseTriggerServiceTest.cls](#casetriggerservicetestcls)
    - [CaseTestUtils.cls](#casetestutilscls)
    - [CaseTriggerTest.cls](#casetriggertestcls)

---

## 1. Apex トリガを作成

1-1. Apex トリガを作成します。

### OpportunityTrigger.trigger

```sh
sfdx force:apex:trigger:create -d force-app/main/default/triggers -e "before insert,before update,before delete,after insert,after update,after delete,after undelete" -n OpportunityTrigger -s Opportunity -t ApexTrigger
```

**OpportunityTrigger.trigger**

```java
trigger OpportunityTrigger on Opportunity(
  before insert,
  before update,
  before delete,
  after insert,
  after update,
  after delete,
  after undelete
) {
  FAT_CommonTriggerHandler handler = FAT_CommonTriggerHandler.create(
    Opportunity.class
  );
  handler.invoke();
}
```

### CaseTrigger.trigger

```sh
sfdx force:apex:trigger:create -d force-app/main/default/triggers -e "before insert,before update,before delete,after insert,after update,after delete,after undelete" -n CaseTrigger -s Case -t ApexTrigger
```

**CaseTrigger.trigger**

```java
trigger CaseTrigger on Case(
  before insert,
  before update,
  before delete,
  after insert,
  after update,
  after delete,
  after undelete
) {
  FAT_CommonTriggerHandler handler = FAT_CommonTriggerHandler.create(
    Case.class
  );
  handler.invoke();
}
```

1-2. コードをフォーマットします。

```sh
yarn prettier
```

1-3. スクラッチ組織へプッシュします。

```sh
sfdx force:source:push -u demo
```

---

## 2. カスタム表示ラベルを追加

2-1. カスタム表示ラベルを追加します。

### CustomLabels.labels-meta.xml

- CLOSED_WON_CANNOT_BE_DELETED
- HIGH_CASE_IS_CREATED

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<CustomLabels xmlns="http://soap.sforce.com/2006/04/metadata">
    <labels>
        <fullName>SLA_EXPIRATION_DATE_REQUIRED</fullName>
        <categories>ERROR</categories>
        <language>ja</language>
        <protected>false</protected>
        <shortDescription>SLA_EXPIRATION_DATE_REQUIRED</shortDescription>
        <value>SLA が設定されている場合は有効期限も入力してください。</value>
    </labels>
    <labels>
        <fullName>SLA_SERIAL_NUMBER_REQUIRED</fullName>
        <categories>ERROR</categories>
        <language>ja</language>
        <protected>false</protected>
        <shortDescription>SLA_SERIAL_NUMBER_REQUIRED</shortDescription>
        <value
    >SLA が設定されている場合はシリアルナンバーも入力してください。</value>
    </labels>
    <labels>
        <fullName>CLOSED_WON_CANNOT_BE_DELETED</fullName>
        <categories>ERROR</categories>
        <language>ja</language>
        <protected>false</protected>
        <shortDescription>CLOSED_WON_CANNOT_BE_DELETED</shortDescription>
        <value>成約済みの商談は削除できません。</value>
    </labels>
    <labels>
        <fullName>HIGH_CASE_IS_CREATED</fullName>
        <categories>INFO</categories>
        <language>ja</language>
        <protected>false</protected>
        <shortDescription>HIGH_CASE_IS_CREATED</shortDescription>
        <value>優先度の高いケースが作成されました！</value>
    </labels>
</CustomLabels>
```

2-2. コードをフォーマットします。

```sh
yarn prettier
```

2-3. スクラッチ組織へプッシュします。

```sh
sfdx force:source:push -u demo
```

---

## 3. Apex クラスを作成

3-1. Apex クラスを作成します。

### OpportunityTriggerValidation.cls

```sh
sfdx force:apex:class:create -d force-app/main/default/classes -n OpportunityTriggerValidation -t DefaultApexClass
```

**OpportunityTriggerValidation.cls**

```java
@SuppressWarnings('PMD.EmptyStatementBlock,PMD.ApexDoc')
public with sharing class OpportunityTriggerValidation implements FAT_ITriggerObserver {
  private static final String CLOSED_WON_CANNOT_BE_DELETED = System.Label.CLOSED_WON_CANNOT_BE_DELETED;
  private static final String CLOSED_WON = 'Closed Won';

  private final FAT_CommonLogger logger = FAT_CommonLogger.getInstance();

  public class CustomException extends Exception {
  }

  private void setMethodName(String methodName) {
    logger.setClassName(OpportunityTriggerValidation.class.getName());
    logger.setMethodName(methodName);
  }

  @TestVisible
  private void preventDeletion(List<Opportunity> opportunities) {
    this.setMethodName('preventDeletion');

    for (Opportunity opportunity : opportunities) {
      logger.store(LoggingLevel.DEBUG, 'opportunity: ' + opportunity.Id);

      Boolean closedWon = CLOSED_WON.equals(opportunity.StageName);
      if (closedWon) {
        opportunity.StageName.addError(CLOSED_WON_CANNOT_BE_DELETED);
        String errorMessage = CLOSED_WON_CANNOT_BE_DELETED;

        CustomException e = new CustomException();
        e.setMessage(errorMessage);
        throw e;
      }
    }
  }

  public void onBeforeInsert(FAT_CommonTriggerHandler handler) {
  }

  public void onBeforeUpdate(FAT_CommonTriggerHandler handler) {
  }

  public void onBeforeDelete(FAT_CommonTriggerHandler handler) {
    this.preventDeletion((List<Opportunity>) handler.oldObjects);
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

### CaseTriggerService.cls

```sh
sfdx force:apex:class:create -d force-app/main/default/classes -n CaseTriggerService -t DefaultApexClass
```

**CaseTriggerService.cls**

```java
@SuppressWarnings('PMD.EmptyStatementBlock,PMD.ApexDoc')
public with sharing class CaseTriggerService implements FAT_ITriggerObserver {
  private static final String HIGH_CASE_IS_CREATED = System.Label.HIGH_CASE_IS_CREATED;
  private static final String PRIORITY_HIGH = 'High';

  private final FAT_CommonLogger logger = FAT_CommonLogger.getInstance();

  private void setMethodName(String methodName) {
    logger.setClassName(CaseTriggerService.class.getName());
    logger.setMethodName(methodName);
  }

  @TestVisible
  private void postFeedItems(List<Case> cases) {
    this.setMethodName('postFeedItems');

    List<FeedItem> feedItems = new List<FeedItem>();
    for (Case newCase : cases) {
      logger.store(LoggingLevel.DEBUG, 'New Case: ' + newCase.Id);

      Boolean isHigh = PRIORITY_HIGH.equals(newCase.Priority);
      if (isHigh) {
        FeedItem feedItem = new FeedItem();
        feedItem.ParentId = newCase.Id;
        feedItem.Body = HIGH_CASE_IS_CREATED;
        feedItems.add(feedItem);
      }
    }
    Database.insert(feedItems, false);
  }

  public void onBeforeInsert(FAT_CommonTriggerHandler handler) {
  }

  public void onBeforeUpdate(FAT_CommonTriggerHandler handler) {
  }

  public void onBeforeDelete(FAT_CommonTriggerHandler handler) {
  }

  public void onAfterInsert(FAT_CommonTriggerHandler handler) {
    this.postFeedItems((List<Case>) handler.newObjects);
  }

  public void onAfterUpdate(FAT_CommonTriggerHandler handler) {
  }

  public void onAfterDelete(FAT_CommonTriggerHandler handler) {
  }

  public void onAfterUndelete(FAT_CommonTriggerHandler handler) {
  }
}
```

3-2. コードをフォーマットします。

```sh
yarn prettier
```

3-3. スクラッチ組織へプッシュします。

```sh
sfdx force:source:push -u demo
```

---

## 4. カスタムメタデータ型を作成

### FAT_TriggerObserver.OpportunityTriggerValidation.md-meta.xml

4-1. `FAT_TriggerObserver.AccountTriggerService.md-meta.xml` をコピーしてカスタムメタデータ型を作成します。

**FAT_TriggerObserver.OpportunityTriggerValidation.md-meta.xml**

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<CustomMetadata
  xmlns="http://soap.sforce.com/2006/04/metadata"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema"
>
    <label>OpportunityTriggerValidation</label>
    <protected>false</protected>
    <values>
        <field>Active__c</field>
        <value xsi:type="xsd:boolean">true</value>
    </values>
    <values>
        <field>AfterDelete__c</field>
        <value xsi:type="xsd:boolean">false</value>
    </values>
    <values>
        <field>AfterInsert__c</field>
        <value xsi:type="xsd:boolean">false</value>
    </values>
    <values>
        <field>AfterUndelete__c</field>
        <value xsi:type="xsd:boolean">false</value>
    </values>
    <values>
        <field>AfterUpdate__c</field>
        <value xsi:type="xsd:boolean">false</value>
    </values>
    <values>
        <field>ApexClass__c</field>
        <value xsi:type="xsd:string">OpportunityTriggerValidation</value>
    </values>
    <values>
        <field>BeforeDelete__c</field>
        <value xsi:type="xsd:boolean">true</value>
    </values>
    <values>
        <field>BeforeInsert__c</field>
        <value xsi:type="xsd:boolean">false</value>
    </values>
    <values>
        <field>BeforeUpdate__c</field>
        <value xsi:type="xsd:boolean">false</value>
    </values>
    <values>
        <field>SObject__c</field>
        <value xsi:type="xsd:string">Opportunity</value>
    </values>
</CustomMetadata>
```

### FAT_TriggerObserver.CaseTriggerService.md-meta.xml

4-2. `FAT_TriggerObserver.AccountTriggerService.md-meta.xml` をコピーしてカスタムメタデータ型を作成します。

**FAT_TriggerObserver.CaseTriggerService.md-meta.xml**

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<CustomMetadata
  xmlns="http://soap.sforce.com/2006/04/metadata"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema"
>
    <label>CaseTriggerService</label>
    <protected>false</protected>
    <values>
        <field>Active__c</field>
        <value xsi:type="xsd:boolean">true</value>
    </values>
    <values>
        <field>AfterDelete__c</field>
        <value xsi:type="xsd:boolean">false</value>
    </values>
    <values>
        <field>AfterInsert__c</field>
        <value xsi:type="xsd:boolean">true</value>
    </values>
    <values>
        <field>AfterUndelete__c</field>
        <value xsi:type="xsd:boolean">false</value>
    </values>
    <values>
        <field>AfterUpdate__c</field>
        <value xsi:type="xsd:boolean">false</value>
    </values>
    <values>
        <field>ApexClass__c</field>
        <value xsi:type="xsd:string">CaseTriggerService</value>
    </values>
    <values>
        <field>BeforeDelete__c</field>
        <value xsi:type="xsd:boolean">false</value>
    </values>
    <values>
        <field>BeforeInsert__c</field>
        <value xsi:type="xsd:boolean">false</value>
    </values>
    <values>
        <field>BeforeUpdate__c</field>
        <value xsi:type="xsd:boolean">false</value>
    </values>
    <values>
        <field>SObject__c</field>
        <value xsi:type="xsd:string">Case</value>
    </values>
</CustomMetadata>
```

4-3. コードをフォーマットします。

```sh
yarn prettier
```

4-4. スクラッチ組織へプッシュします。

```sh
sfdx force:source:push -u demo
```

---

## 5. Apex テストクラスを作成

5-1. Apex テストクラスを作成します。

### OpportunityTriggerValidationTest.cls

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n OpportunityTriggerValidationTest -t ApexUnitTest
```

**OpportunityTriggerValidationTest.cls**

```java
@isTest(SeeAllData=false)
private class OpportunityTriggerValidationTest {
  private static final String CLOSED_WON_CANNOT_BE_DELETED = System.Label.CLOSED_WON_CANNOT_BE_DELETED;
  private static final String CLOSED_WON = 'Closed Won';
  private static OpportunityTriggerValidation validation = new OpportunityTriggerValidation();
  private static FAT_CommonTriggerHandler handler = FAT_CommonTriggerHandler.create(
    Opportunity.class
  );

  @isTest
  static void preventDeletion() {
    List<Opportunity> opportunities = new List<Opportunity>();
    Opportunity opportunity = new Opportunity();
    opportunity.StageName = CLOSED_WON;
    opportunities.add(opportunity);

    Test.startTest();
    List<Boolean> exceptions = new List<Boolean>();
    try {
      validation.preventDeletion(opportunities);
    } catch (Exception e) {
      exceptions.add(true);
      String message = e.getMessage();
      System.assertEquals(
        CLOSED_WON_CANNOT_BE_DELETED,
        message,
        'preventDeletion'
      );
    }
    Test.stopTest();

    for (Boolean b : exceptions) {
      System.assertEquals(true, b, 'preventDeletion');
    }
  }

  @isTest
  static void onBeforeInsert() {
    Test.startTest();
    validation.onBeforeInsert(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onBeforeInsert');
  }

  @isTest
  static void onBeforeUpdate() {
    Test.startTest();
    validation.onBeforeUpdate(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onBeforeUpdate');
  }

  @isTest
  static void onBeforeDelete() {
    List<Opportunity> opportunities = new List<Opportunity>();
    handler.oldObjects = opportunities;

    Test.startTest();
    validation.onBeforeDelete(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onBeforeDelete');
  }

  @isTest
  static void onAfterInsert() {
    Test.startTest();
    validation.onAfterInsert(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onAfterInsert');
  }

  @isTest
  static void onAfterUpdate() {
    Test.startTest();
    validation.onAfterUpdate(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onAfterUpdate');
  }

  @isTest
  static void onAfterDelete() {
    Test.startTest();
    validation.onAfterDelete(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onAfterDelete');
  }

  @isTest
  static void onAfterUndelete() {
    Test.startTest();
    validation.onAfterUndelete(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onAfterUndelete');
  }
}
```

### OpportunityTestUtils.cls

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n OpportunityTestUtils -t ApexUnitTest
```

**OpportunityTestUtils.cls**

```java
@SuppressWarnings('PMD.ApexDoc')
@isTest(SeeAllData=false)
public with sharing class OpportunityTestUtils {
  public static List<Opportunity> createNormalOpportunities() {
    List<Opportunity> opportunities = new List<Opportunity>();

    Opportunity opportunity1 = new Opportunity();
    opportunity1.Name = 'Demo 1';
    opportunity1.StageName = 'Closed Won';
    opportunity1.CloseDate = Date.today();
    opportunities.add(opportunity1);

    return opportunities;
  }

  public static List<Opportunity> selectOpportunities() {
    return [
      SELECT Id, Name, StageName, CloseDate
      FROM Opportunity
      ORDER BY Name ASC
      LIMIT 50000
    ];
  }

  public static void insertOpportunities(List<Opportunity> opportunities) {
    List<Database.SaveResult> results = Database.insert(opportunities, false);
  }

  public static void updateOpportunities(List<Opportunity> opportunities) {
    List<Database.SaveResult> results = Database.update(opportunities, false);
  }

  public static void deleteOpportunities(List<Opportunity> opportunities) {
    List<Database.DeleteResult> results = Database.delete(opportunities, false);
  }

  public static void undeleteOpportunities(List<Opportunity> opportunities) {
    List<Database.UndeleteResult> results = Database.undelete(
      opportunities,
      false
    );
  }
}
```

### OpportunityTriggerTest.cls

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n OpportunityTriggerTest -t ApexUnitTest
```

**OpportunityTriggerTest.cls**

```java
@isTest(SeeAllData=false)
private class OpportunityTriggerTest {
  @testSetup
  static void setup() {
    List<Opportunity> opportunities = OpportunityTestUtils.createNormalOpportunities();
    OpportunityTestUtils.insertOpportunities(opportunities);
  }

  @isTest
  static void invokeDelete() {
    List<Opportunity> opportunities = OpportunityTestUtils.selectOpportunities();

    Test.startTest();
    OpportunityTestUtils.deleteOpportunities(opportunities);
    Test.stopTest();

    System.assertNotEquals(0, opportunities.size(), 'invokeDelete');
  }
}
```

### CaseTriggerServiceTest.cls

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n CaseTriggerServiceTest -t ApexUnitTest
```

**CaseTriggerServiceTest.cls**

```java
@isTest(SeeAllData=false)
private class CaseTriggerServiceTest {
  private static CaseTriggerService service = new CaseTriggerService();
  private static FAT_CommonTriggerHandler handler = FAT_CommonTriggerHandler.create(
    Case.class
  );

  @isTest
  static void postFeedItems() {
    List<Case> cases = new List<Case>();
    Case newCase = new Case();
    newCase.Priority = 'High';
    newCase.Origin = 'Phone';
    newCase.Status = 'New';
    cases.add(newCase);

    Test.startTest();
    service.postFeedItems(cases);
    Test.stopTest();

    System.assertNotEquals(null, cases, 'postFeedItems');
  }

  @isTest
  static void onBeforeInsert() {
    Test.startTest();
    service.onBeforeInsert(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onBeforeInsert');
  }

  @isTest
  static void onBeforeUpdate() {
    Test.startTest();
    service.onBeforeUpdate(handler);
    Test.stopTest();

    System.assertNotEquals(null, handler, 'onBeforeUpdate');
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
    List<Case> cases = new List<Case>();
    handler.newObjects = cases;

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

### CaseTestUtils.cls

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n CaseTestUtils -t ApexUnitTest
```

**CaseTestUtils.cls**

```java
@SuppressWarnings('PMD.ApexDoc')
@isTest(SeeAllData=false)
public with sharing class CaseTestUtils {
  public static List<Case> createNormalCases() {
    List<Case> cases = new List<Case>();

    Case case1 = new Case();
    case1.Priority = 'High';
    case1.Origin = 'Phone';
    case1.Status = 'New';
    cases.add(case1);

    return cases;
  }

  public static List<Case> selectCases() {
    return [
      SELECT Id, CaseNumber, Priority, Origin, Status
      FROM Case
      ORDER BY CaseNumber ASC
      LIMIT 50000
    ];
  }

  public static void insertCases(List<Case> cases) {
    List<Database.SaveResult> results = Database.insert(cases, false);
  }

  public static void updateCases(List<Case> cases) {
    List<Database.SaveResult> results = Database.update(cases, false);
  }

  public static void deleteCases(List<Case> cases) {
    List<Database.DeleteResult> results = Database.delete(cases, false);
  }

  public static void undeleteCases(List<Case> cases) {
    List<Database.UndeleteResult> results = Database.undelete(cases, false);
  }
}
```

### CaseTriggerTest.cls

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n CaseTriggerTest -t ApexUnitTest
```

**CaseTriggerTest.cls**

```java
@isTest(SeeAllData=false)
private class CaseTriggerTest {
  @testSetup
  static void setup() {
    List<Case> cases = CaseTestUtils.createNormalCases();
    CaseTestUtils.insertCases(cases);
  }

  @isTest
  static void invokeDelete() {
    List<Case> cases = CaseTestUtils.selectCases();

    Test.startTest();
    CaseTestUtils.deleteCases(cases);
    Test.stopTest();

    System.assertNotEquals(0, cases.size(), 'invokeDelete');
  }
}
```

5-2. コードをフォーマットします。

```sh
yarn prettier
```

5-3. スクラッチ組織へプッシュします。

```sh
sfdx force:source:push -u demo
```

5-4. Apex テストを実行して現在のコードカバー率を確認します。

```sh
$Env:SFDX_IMPROVED_CODE_COVERAGE = "true"

sfdx force:apex:test:run -c -l RunLocalTests -r human -u demo
```

```sh
=== Test Summary
NAME                 VALUE
───────────────────  ───────────────────────────────────────────────────────────
Outcome              Passed
Tests Ran            85
Passing              85
Failing              0
Skipped              0
Pass Rate            100%
Fail Rate            0%
Test Run Coverage    100%
Org Wide Coverage    100%

(...以下省略...)

```

コードカバー率は 100%になっています！

動作確認してみましょう。商談画面を開いて、想定通りの挙動かどうかを確認しましょう。
また、ケース画面を開いて、想定通りの挙動かどうかを確認しましょう。

... いかがでしたか？
