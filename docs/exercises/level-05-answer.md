# Lv. 5 の解答

1-1. Apex トリガを作成します。

```sh
sfdx force:apex:trigger:create -d force-app/main/default/triggers -e "before insert,before update,before delete,after insert,after update,after delete,after undelete" -n OpportunityTrigger -s Opportunity -t ApexTrigger
```

##### OpportunityTrigger.trigger

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

```sh
sfdx force:apex:trigger:create -d force-app/main/default/triggers -e "before insert,before update,before delete,after insert,after update,after delete,after undelete" -n CaseTrigger -s Case -t ApexTrigger
```

##### CaseTrigger.trigger

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

2-1. カスタム表示ラベルを追加します。

##### CustomLabels.labels-meta.xml

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

3-1. Apex クラスを作成します。

```sh
sfdx force:apex:class:create -d force-app/main/default/classes -n OpportunityTriggerValidation -t DefaultApexClass
```

```sh
sfdx force:apex:class:create -d force-app/main/default/classes -n CaseTriggerService -t DefaultApexClass
```

##### OpportunityTriggerValidation.cls

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

##### CaseTriggerService.cls

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

4-1. `FAT_TriggerObserver.AccountTriggerService.md-meta.xml` をコピーしてカスタムメタデータ型を作成します。

##### FAT_TriggerObserver.OpportunityTriggerValidation.md-meta.xml

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

##### FAT_TriggerObserver.CaseTriggerService.md-meta.xml

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

4-2. コードをフォーマットします。

```sh
yarn prettier
```

4-3. スクラッチ組織へプッシュします。

```sh
sfdx force:source:push -u demo
```

---

5-1. テストクラスを作成します。

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n OpportunityTriggerValidationTest -t ApexUnitTest
```

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n OpportunityTestUtils -t ApexUnitTest
```

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n OpportunityTriggerTest -t ApexUnitTest
```

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n CaseTriggerServiceTest -t ApexUnitTest
```

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n CaseTestUtils -t ApexUnitTest
```

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n CaseTriggerTest -t ApexUnitTest
```

##### OpportunityTriggerValidationTest.cls

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

##### OpportunityTestUtils.cls

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

##### OpportunityTriggerTest.cls

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

##### CaseTriggerServiceTest.cls

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

##### CaseTestUtils.cls

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

##### CaseTriggerTest.cls

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
export SFDX_IMPROVED_CODE_COVERAGE="true"

sfdx force:apex:test:run -c -l RunLocalTests -r human -u demo
```

```sh
=== Apex Code Coverage
ID                  NAME                           % COVERED  UNCOVERED LINES
──────────────────  ─────────────────────────────  ─────────  ───────────────
01p0l0000027mMxAAI  FAT_CommonTriggerHelper        100%
01p0l0000027mN7AAI  AccountTriggerService          100%
01p0l0000027mMpAAI  FAT_CommonLogger               100%
01p0l0000027mMmAAI  FAT_CommonConstants            NaN%
01p0l0000027mMqAAI  FAT_CommonLoggerConstants      100%
01p0l0000027mMrAAI  FAT_CommonLoggerHelper         100%
01p0l0000027mMvAAI  FAT_CommonTriggerHandler       100%
01p0l0000027mN3AAI  FAT_LoggerEventTriggerService  100%
01p0l0000027mNAAAY  AccountTriggerValidation       100%
01p0l0000027mMnAAI  FAT_CommonError                100%
01q0l000000HcL5AAK  AccountTrigger                 100%
01p0l0000027mN0AAI  FAT_CommonUtils                100%
01q0l000000HcL0AAK  FAT_LoggerEventTrigger         100%
01p0l0000027ppJAAQ  CaseTriggerService             100%
01q0l000000HctXAAS  CaseTrigger                    100%
01p0l0000027ppLAAQ  OpportunityTriggerValidation   100%
01q0l000000HctYAAS  OpportunityTrigger             100%

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
```

コードカバー率は 100%になっています！

動作確認してみましょう。商談画面を開いて、想定通りの挙動かどうかを確認しましょう。
また、ケース画面を開いて、想定通りの挙動かどうかを確認しましょう。

... いかがでしたか？
