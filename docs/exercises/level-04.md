# Lv. 4 : 既存の Apex トリガのロジックを変更してみよう

[Flexible Apex Trigger](https://github.com/takahitomiyamoto/flexible-apex-trigger#flexible-apex-trigger) を利用することで、ビジネスロジックを変更しやすくなっています。もちろんテストも書きやすくなっています。実際に体感してみましょう。

## ビジネス要件

これまでは、データを作成および更新するタイミングで項目自動更新をしていました。
これからは、データを作成するタイミングで一時的にそのロジックを停止したいと考えています。

また、データを作成および更新するタイミングで入力規則をかけたいと考えています。
SLA が設定されている場合、SLA の有効期限およびシリアルナンバーが入力されていなければなりません。
入力されていない場合、エラーメッセージを表示して保存できないようにしてください。

## アーキテクチャ要件

[Flexible Apex Trigger](https://github.com/takahitomiyamoto/flexible-apex-trigger#flexible-apex-trigger) を利用してください。
入力規則は Apex トリガで実装してください。
すべてのテストデータはテストクラス内で作成してください。

## システム要件

### Apex クラス

| 観点          | 内容                       | 備考            |
| :------------ | :------------------------- | :-------------- |
| Apex クラス名 | `AccountTriggerValidation` | -               |
| メソッド (1)  | `validateSLA`              | (1)-1. 入力規則 |

- 新規作成する前に `validateSLA` を実行する
- 更新する前に `validateSLA`を実行する

| テストクラス名               | 用途                                                | 備考 |
| :--------------------------- | :-------------------------------------------------- | :--- |
| AccountTriggerValidationTest | `AccountTriggerValidation.cls` に対するテストクラス | -    |

#### (1)-1. 入力規則

##### エラー条件

次のいずれかの条件を満たす場合:

1. SLA が null でない、かつ SLA Expiration Date が null である
1. SLA が null でない、かつ SLA Serial Number が null である

| 表示ラベル          | 項目名                 | 備考 |
| :------------------ | :--------------------- | :--- |
| SLA                 | SLA\_\_c               | -    |
| SLA Expiration Date | SLAExpirationDate\_\_c | -    |
| SLA Serial Number   | SLASerialNumber\_\_c   | -    |

##### エラーメッセージ

| エラー ID                    | エラーメッセージ                                             | エラー表示場所      | 備考                                   |
| :--------------------------- | :----------------------------------------------------------- | :------------------ | :------------------------------------- |
| SLA_EXPIRATION_DATE_REQUIRED | SLA が設定されている場合は有効期限も入力してください         | SLA Expiration Date | SLA Expiration Date が null である場合 |
| SLA_SERIAL_NUMBER_REQUIRED   | SLA が設定されている場合はシリアルナンバーも入力してください | SLA Serial Number   | SLA Serial Number が null である場合   |

### カスタムメタデータ型

| 項目名                       | 値                      | 備考 |
| :--------------------------- | :---------------------- | :--- |
| 表示ラベル                   | `AccountTriggerService` | -    |
| カスタムメタデータレコード名 | `AccountTriggerService` | -    |
| Apex Class                   | `AccountTriggerService` | -    |
| sObject                      | `Account`               | -    |
| Active                       | Yes                     | -    |
| Before Insert                | No                      | -    |
| Before Update                | Yes                     | -    |

| 項目名                       | 値                         | 備考 |
| :--------------------------- | :------------------------- | :--- |
| 表示ラベル                   | `AccountTriggerValidation` | -    |
| カスタムメタデータレコード名 | `AccountTriggerValidation` | -    |
| Apex Class                   | `AccountTriggerValidation` | -    |
| sObject                      | `Account`                  | -    |
| Active                       | Yes                        | -    |
| Before Insert                | Yes                        | -    |
| Before Update                | Yes                        | -    |

## 解答

> [こちら](level-04-answer.md)
