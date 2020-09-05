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

---

3-1. Apex クラスを作成します。

```sh
sfdx force:apex:class:create -d force-app/main/default/classes -n OpportunityTriggerValidation -t DefaultApexClass
```

##### OpportunityTriggerValidation.cls

```java
@SuppressWarnings('PMD.EmptyStatementBlock,PMD.ApexDoc')
public with sharing class OpportunityTriggerValidation implements FAT_ITriggerObserver {
  private static final String CLOSED_WON_CANNOT_BE_DELETED = System.Label.CLOSED_WON_CANNOT_BE_DELETED;
  private static final String CLOSED_WON = 'Closed Won';

  public class CustomException extends Exception {
  }

  @TestVisible
  private void preventDeletion(List<Opportunity> opportunities) {
    for (Opportunity opportunity : opportunities) {
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
    this.preventDeletion((List<Opportunity>) handler.newObjects);
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

```sh
sfdx force:apex:class:create -d force-app/main/default/classes -n CaseTriggerService -t DefaultApexClass
```

##### CaseTriggerService.cls

```java

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

##### OpportunityTriggerValidationTest.cls

```java

```

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n OpportunityTriggerTest -t ApexUnitTest
```

##### OpportunityTriggerTest.cls

```java

```

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n CaseTriggerServiceTest -t ApexUnitTest
```

##### CaseTriggerServiceTest.cls

```java

```

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n CaseTriggerTest -t ApexUnitTest
```

##### CaseTriggerTest.cls

```java

```

5-2. コードをフォーマットします。

```sh
yarn prettier
```

5-3. スクラッチ組織へプッシュします。

```sh
sfdx force:source:push -u demo
```
