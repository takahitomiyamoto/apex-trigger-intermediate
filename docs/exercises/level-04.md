# Lv. 4 : 既存の Apex トリガのロジックを変更してみよう

[Flexible Apex Trigger](https://github.com/takahitomiyamoto/flexible-apex-trigger#flexible-apex-trigger) を利用することで、ビジネスロジックを変更しやすくなっています。もちろんテストも書きやすくなっています。実際に体感してみましょう。

## ビジネス要件

- これまでは、データを作成および更新するタイミングで項目自動更新をしていました。これからは、データを作成するタイミングで一時的にそのロジックを停止したいと考えています。
- データを作成および更新するタイミングで入力規則をかけたいと考えています。SLA が設定されている場合、SLA の有効期限およびシリアルナンバーが入力されていなければなりません。入力されていない場合、エラーメッセージを表示して保存できないようにしてください。

## アーキテクチャ要件

- [Flexible Apex Trigger](https://github.com/takahitomiyamoto/flexible-apex-trigger#flexible-apex-trigger) を利用してください。
- 入力規則は Apex トリガで実装してください。
- エラーメッセージはカスタム表示ラベルに定義してください。
- すべてのテストデータはテストクラス内で作成してください。

## システム要件

### Apex クラス

| クラス修飾子          | クラス名                   | 継承                   | 備考 |
| :-------------------- | :------------------------- | :--------------------- | :--- |
| `public with sharing` | `AccountTriggerValidation` | `FAT_ITriggerObserver` | -    |

#### AccountTriggerValidation

| アクセス修飾子と型 | メソッド名    | 説明                        | 備考           |
| :----------------- | :------------ | :-------------------------- | :------------- |
| `private void`     | `validateSLA` | [(1) 入力規則](#level-04-1) | `@TestVisible` |

- 新規作成する前に `validateSLA` を実行する
- 更新する前に `validateSLA`を実行する

<a id="level-04-1"></a>

##### (1) 入力規則

###### エラー条件

次のいずれかの条件を満たす場合:

1. SLA が `null` でない、かつ SLA Expiration Date が `null` である
1. SLA が `null` でない、かつ SLA Serial Number が `null` である

| 表示ラベル          | 項目名                 | 備考 |
| :------------------ | :--------------------- | :--- |
| SLA                 | `SLA__c`               | -    |
| SLA Expiration Date | `SLAExpirationDate__c` | -    |
| SLA Serial Number   | `SLASerialNumber__c`   | -    |

###### エラーメッセージ

| エラーメッセージ                                               | エラー表示場所      | 備考                                     |
| :------------------------------------------------------------- | :------------------ | :--------------------------------------- |
| SLA が設定されている場合は有効期限も入力してください。         | SLA Expiration Date | SLA Expiration Date が `null` である場合 |
| SLA が設定されている場合はシリアルナンバーも入力してください。 | SLA Serial Number   | SLA Serial Number が `null` である場合   |

### Apex テストクラス

| クラス修飾子 | クラス名                       | 用途                                                | 備考 |
| :----------- | :----------------------------- | :-------------------------------------------------- | :--- |
| `private`    | `AccountTriggerValidationTest` | `AccountTriggerValidation.cls` に対するテストクラス | -    |

### カスタム表示ラベル

| カテゴリ | エラー ID                      | エラーメッセージ                                               | 備考 |
| :------- | :----------------------------- | :------------------------------------------------------------- | :--- |
| `ERROR`  | `SLA_EXPIRATION_DATE_REQUIRED` | SLA が設定されている場合は有効期限も入力してください。         | -    |
| `ERROR`  | `SLA_SERIAL_NUMBER_REQUIRED`   | SLA が設定されている場合はシリアルナンバーも入力してください。 | -    |

### カスタムメタデータ型

#### FAT_TriggerObserver

| 表示ラベル<br>カスタムメタデータレコード名<br>Apex Class | sObject   | Active | Before<br>Insert | Before<br>Update | Before<br>Delete | After<br>Insert |
| :------------------------------------------------------- | :-------- | :----- | :--------------- | :--------------- | :--------------- | :-------------- |
| `AccountTriggerService`                                  | `Account` | Yes    | No               | Yes              | No               | No              |
| `AccountTriggerValidation`                               | `Account` | Yes    | Yes              | Yes              | No               | No              |

## 解答

> [こちら](level-04-answer.md)
