# Lv. 4 の解答

1-1. カスタムメタデータ型のレコードを修正するために、スクラッチ組織から pull します。

```sh
sfdx force:source:pull -u demo
```

1-2. `force-app/main/default/customMetadata/FAT_TriggerObserver.AccountTriggerService.md-meta.xml` を開いて`BeforeInsert__c`の値を修正します。

##### FAT_TriggerObserver.AccountTriggerService.md-meta.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<CustomMetadata
  xmlns="http://soap.sforce.com/2006/04/metadata"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema"
>
    <label>AccountTriggerService</label>
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
        <value xsi:type="xsd:string">AccountTriggerService</value>
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
        <value xsi:type="xsd:boolean">true</value>
    </values>
    <values>
        <field>SObject__c</field>
        <value xsi:type="xsd:string">Account</value>
    </values>
</CustomMetadata>
```

1-3. `FAT_TriggerObserver.AccountTriggerService.md-meta.xml` をコピーして `force-app/main/default/customMetadata/FAT_TriggerObserver.AccountTriggerValidation.md-meta.xml` を作成します。

##### FAT_TriggerObserver.AccountTriggerValidation.md-meta.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<CustomMetadata
  xmlns="http://soap.sforce.com/2006/04/metadata"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema"
>
    <label>AccountTriggerValidation</label>
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
        <value xsi:type="xsd:string">AccountTriggerValidation</value>
    </values>
    <values>
        <field>BeforeDelete__c</field>
        <value xsi:type="xsd:boolean">false</value>
    </values>
    <values>
        <field>BeforeInsert__c</field>
        <value xsi:type="xsd:boolean">true</value>
    </values>
    <values>
        <field>BeforeUpdate__c</field>
        <value xsi:type="xsd:boolean">true</value>
    </values>
    <values>
        <field>SObject__c</field>
        <value xsi:type="xsd:string">Account</value>
    </values>
</CustomMetadata>
```

1-4. コードをフォーマットします。

```sh
yarn prettier
```

1-5. スクラッチ組織へプッシュします。

```sh
sfdx force:source:push -u demo
```

![customMetadata](../images/level-04-answer-01.png)

2-1. カスタム表示ラベルにレコードを追加するために、スクラッチ組織を開きます。

```sh
sfdx force:org:open -u demo -p lightning/setup/ExternalStrings/home
```

2-2. `新規カスタム表示ラベル` をクリックします。

![customLabels](../images/level-04-answer-02.png)

2-3. 情報を入力して `保存` をクリックします。

| 項目名             | 値                                                     | 備考 |
| :----------------- | :----------------------------------------------------- | :--- |
| 簡単な説明         | SLA_EXPIRATION_DATE_REQUIRED                           | -    |
| 名前               | SLA_EXPIRATION_DATE_REQUIRED                           | -    |
| 保護コンポーネント | No                                                     | -    |
| カテゴリ           | ERROR                                                  | -    |
| 値                 | SLA が設定されている場合は有効期限も入力してください。 | -    |

![customLabels](../images/level-04-answer-03.png)

2-4. カスタム表示ラベルのレコードを追加するために、スクラッチ組織から pull します。

```sh
sfdx force:source:pull -u demo
```

2-5. `force-app/main/default/labels/CustomLabels.labels-meta.xml` を開いて `SLA_SERIAL_NUMBER_REQUIRED` を追加します。

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
</CustomLabels>
```

2-6. コードをフォーマットします。

```sh
yarn prettier
```

2-7. スクラッチ組織へプッシュします。

```sh
sfdx force:source:push -u demo
```

![customMetadata](../images/level-04-answer-04.png)

3-1. `AccountTriggerValidation.cls` を作成します。

```sh
sfdx force:apex:class:create -d force-app/main/default/classes -n AccountTriggerValidation -t DefaultApexClass
```

3-2. FAT_ITriggerObserver を実装します。

##### AccountTriggerValidation.cls

```java
public with sharing class AccountTriggerValidation implements FAT_ITriggerObserver {
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

3-3. `validateSLA` を追加します。

##### AccountTriggerValidation.cls

```java
public with sharing class AccountTriggerValidation implements FAT_ITriggerObserver {
  private static final String SLA_EXPIRATION_DATE_REQUIRED = System.Label.SLA_EXPIRATION_DATE_REQUIRED;
  private static final String SLA_SERIAL_NUMBER_REQUIRED = System.Label.SLA_SERIAL_NUMBER_REQUIRED;

  public class CustomException extends Exception {
  }

  @TestVisible
  private void validateSLA(List<Account> accounts) {
    for (Account account : accounts) {
      Boolean hasSLA = String.isNotEmpty(account.SLA__c);
      Boolean hasSLAExpirationDate = String.isNotEmpty(
        String.valueOf(account.SLAExpirationDate__c)
      );
      Boolean hasSLASerialNumber = String.isNotEmpty(
        account.SLASerialNumber__c
      );

      String errorMessage = '';
      if (hasSLA && !hasSLAExpirationDate) {
        account.SLAExpirationDate__c.addError(SLA_EXPIRATION_DATE_REQUIRED);
        errorMessage += SLA_EXPIRATION_DATE_REQUIRED;
      }
      if (hasSLA && !hasSLASerialNumber) {
        account.SLASerialNumber__c.addError(SLA_SERIAL_NUMBER_REQUIRED);
        errorMessage += SLA_SERIAL_NUMBER_REQUIRED;
      }

      Boolean hasErrorMessage = String.isNotEmpty(errorMessage);
      if (hasErrorMessage) {
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

3-4. `onBeforeInsert` から `validateSLA` を呼び出し、
`onBeforeUpdate` から `validateSLA` を呼び出すようにします。

```java
public with sharing class AccountTriggerValidation implements FAT_ITriggerObserver {
  private static final String SLA_EXPIRATION_DATE_REQUIRED = System.Label.SLA_EXPIRATION_DATE_REQUIRED;
  private static final String SLA_SERIAL_NUMBER_REQUIRED = System.Label.SLA_SERIAL_NUMBER_REQUIRED;

  public class CustomException extends Exception {
  }

  @TestVisible
  private void validateSLA(List<Account> accounts) {
    for (Account account : accounts) {
      Boolean hasSLA = String.isNotEmpty(account.SLA__c);
      Boolean hasSLAExpirationDate = String.isNotEmpty(
        String.valueOf(account.SLAExpirationDate__c)
      );
      Boolean hasSLASerialNumber = String.isNotEmpty(
        account.SLASerialNumber__c
      );

      String errorMessage = '';
      if (hasSLA && !hasSLAExpirationDate) {
        account.SLAExpirationDate__c.addError(SLA_EXPIRATION_DATE_REQUIRED);
        errorMessage += SLA_EXPIRATION_DATE_REQUIRED;
      }
      if (hasSLA && !hasSLASerialNumber) {
        account.SLASerialNumber__c.addError(SLA_SERIAL_NUMBER_REQUIRED);
        errorMessage += SLA_SERIAL_NUMBER_REQUIRED;
      }

      Boolean hasErrorMessage = String.isNotEmpty(errorMessage);
      if (hasErrorMessage) {
        CustomException e = new CustomException();
        e.setMessage(errorMessage);
        throw e;
      }
    }
  }

  public void onBeforeInsert(FAT_CommonTriggerHandler handler) {
    this.validateSLA((List<Account>) handler.newObjects);
  }

  public void onBeforeUpdate(FAT_CommonTriggerHandler handler) {
    this.validateSLA((List<Account>) handler.newObjects);
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

4-1. Apex テストを実行して現在のコードカバー率を確認します。

```sh
export SFDX_IMPROVED_CODE_COVERAGE="true"

sfdx force:apex:test:run -c -l RunLocalTests -r human -u demo
```

```sh
=== Apex Code Coverage
ID                  NAME                           % COVERED  UNCOVERED LINES
──────────────────  ─────────────────────────────  ─────────  ───────────────────────────────────
01p1m000000dNwKAAU  FAT_CommonConstants            NaN%
01p1m000000dNwLAAU  FAT_CommonError                100%
01p1m000000dNwYAAU  FAT_CommonUtils                100%
01p1m000000dNwPAAU  FAT_CommonLoggerHelper         100%
01p1m000000dNwOAAU  FAT_CommonLoggerConstants      100%
01p1m000000dNwNAAU  FAT_CommonLogger               100%
01q1m000000EAWXAA4  FAT_LoggerEventTrigger         100%
01p1m000000dNwbAAE  FAT_LoggerEventTriggerService  100%
01p1m000000dNwTAAU  FAT_CommonTriggerHandler       98%        216,217
01p1m000000dNwVAAU  FAT_CommonTriggerHelper        100%
01p1m000000dO0mAAE  AccountTriggerService          100%
01p1m000000dWaeAAE  AccountTriggerValidation       60%        21,22,25,26,31,32,33,46,49,52,55,58
01q1m000000E9UvAAK  AccountTrigger                 100%

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
Test Run Coverage    96%
Org Wide Coverage    96%
```

4-2. AccountTriggerValidationTest.cls のテストクラスを作成します。

```sh
sfdx force:apex:class:create -d force-app/test/default/classes -n AccountTriggerValidationTest -t ApexUnitTest
```

##### AccountTriggerValidationTest.cls

```java
@isTest(SeeAllData=false)
private class AccountTriggerValidationTest {
  private static AccountTriggerValidation validation = new AccountTriggerValidation();

  @isTest
  static void validateSLA() {
    List<Account> accounts = new List<Account>();
    Account account = new Account();
    account.Name = 'Demo';
    accounts.add(account);

    Test.startTest();
    validation.validateSLA(accounts);
    Test.stopTest();

    System.assertNotEquals(null, validation, 'validateSLA');
  }
}
```

4-3. コードをフォーマットします。

```sh
yarn prettier
```

4-4. スクラッチ組織へプッシュします。

```sh
sfdx force:source:push -u demo
```

4-5. Apex テストを実行して現在のコードカバー率を確認します。

```sh
export SFDX_IMPROVED_CODE_COVERAGE="true"

sfdx force:apex:test:run -c -l RunLocalTests -r human -u demo
```

```sh
=== Apex Code Coverage
ID                  NAME                           % COVERED  UNCOVERED LINES
──────────────────  ─────────────────────────────  ─────────  ───────────────────────────────────────────────

=== Test Summary
NAME                 VALUE
───────────────────  ─────────────────────────────────────────────────────────
```
