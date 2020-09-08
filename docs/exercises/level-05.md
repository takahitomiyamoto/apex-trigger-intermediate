# Lv. 5 : 新規に Apex トリガを追加してみよう

[Flexible Apex Trigger](https://github.com/takahitomiyamoto/flexible-apex-trigger#flexible-apex-trigger) を利用することで、Apex トリガを量産しやすくなっています。
実際に体感してみましょう。

## ビジネス要件

売上として計上されている商談データを誤って削除できないようにしたいと考えています。
成約済みの場合、エラーメッセージを表示して削除できないようにしてください。

また、重要なケースが起票された場合に見逃しにくくしたいと考えています。
重要度が高いケースが新規作成された場合に、Chatter フィードにメッセージが自動投稿されるようにしてください。

## アーキテクチャ要件

- [Flexible Apex Trigger](https://github.com/takahitomiyamoto/flexible-apex-trigger#flexible-apex-trigger) を利用してください。
- エラーメッセージはカスタム表示ラベルに定義してください。
- すべてのテストデータはテストクラス内で作成してください。

## システム要件

### Apex トリガ

| 観点                     | 内容                 | 備考 |
| :----------------------- | :------------------- | :--- |
| Apex トリガ名            | `OpportunityTrigger` | -    |
| 対象オブジェクト         | 商談                 | -    |
| 複数件レコードの一括処理 | Yes                  | -    |

| 観点                     | 内容          | 備考 |
| :----------------------- | :------------ | :--- |
| Apex トリガ名            | `CaseTrigger` | -    |
| 対象オブジェクト         | ケース        | -    |
| 複数件レコードの一括処理 | Yes           | -    |

### Apex クラス

| 観点          | 内容                           | 備考                   |
| :------------ | :----------------------------- | :--------------------- |
| Apex クラス名 | `OpportunityTriggerValidation` | -                      |
| メソッド (1)  | `preventDeletion`              | (1) 削除防止アクション |

- 削除する前に `preventDeletion` を実行する

| 観点          | 内容                 | 備考                       |
| :------------ | :------------------- | :------------------------- |
| Apex クラス名 | `CaseTriggerService` | -                          |
| メソッド (2)  | `postFeedItems`      | (2) フィード投稿アクション |

- 新規作成した後に `postFeedItems` を実行する

| テストクラス名                     | 用途                                                                  | 備考 |
| :--------------------------------- | :-------------------------------------------------------------------- | :--- |
| `OpportunityTriggerValidationTest` | `OpportunityTriggerValidation.cls` に対するテストクラス               | -    |
| `OpportunityTestUtils`             | `OpportunityTriggerTest.cls` で利用するテストメソッドを準備するクラス | -    |
| `OpportunityTriggerTest`           | `OpportunityTrigger.trigger` に対するテストクラス                     | -    |
| `CaseTriggerServiceTest`           | `CaseTriggerServiceTest.cls` に対するテストクラス                     | -    |
| `CaseTestUtils`                    | `CaseTriggerTest.cls` で利用するテストメソッドを準備するクラス        | -    |
| `CaseTriggerTest`                  | `CaseTrigger.trigger` に対するテストクラス                            | -    |

#### (1) 削除防止アクション

##### 起動条件

次の条件を満たす場合:

- フェーズが `Closed Won` である

| 表示ラベル | 項目名      | 備考 |
| :--------- | :---------- | :--- |
| フェーズ   | `StageName` | -    |

##### エラーメッセージ

| エラーメッセージ                 | エラー表示場所 | 備考 |
| :------------------------------- | :------------- | :--- |
| 成約済みの商談は削除できません。 | `Stage`        | -    |

#### (2) フィード投稿アクション

##### 起動条件

次の条件を満たす場合:

- 優先度が `High` である

| 表示ラベル | 項目名     | 備考 |
| :--------- | :--------- | :--- |
| 優先度     | `Priority` | -    |

##### 投稿メッセージ

| 投稿メッセージ                       | 投稿場所                       | 備考 |
| :----------------------------------- | :----------------------------- | :--- |
| 優先度の高いケースが作成されました！ | 新規作成したケースのフィード欄 | -    |

### カスタム表示ラベル

| カテゴリ | エラー ID                      | エラーメッセージ                     | 備考 |
| :------- | :----------------------------- | :----------------------------------- | :--- |
| `ERROR`  | `CLOSED_WON_CANNOT_BE_DELETED` | 成約済みの商談は削除できません。     | -    |
| `INFO`   | `HIGH_CASE_IS_CREATED`         | 優先度の高いケースが作成されました！ | -    |

### カスタムメタデータ型 : FAT_TriggerObserver

| 項目名                       | 値                             | 備考 |
| :--------------------------- | :----------------------------- | :--- |
| 表示ラベル                   | `OpportunityTriggerValidation` | -    |
| カスタムメタデータレコード名 | `OpportunityTriggerValidation` | -    |
| Apex Class                   | `OpportunityTriggerValidation` | -    |
| sObject                      | `Opportunity`                  | -    |
| Active                       | Yes                            | -    |
| Before Delete                | Yes                            | -    |

| 項目名                       | 値                   | 備考 |
| :--------------------------- | :------------------- | :--- |
| 表示ラベル                   | `CaseTriggerService` | -    |
| カスタムメタデータレコード名 | `CaseTriggerService` | -    |
| Apex Class                   | `CaseTriggerService` | -    |
| sObject                      | `Case`               | -    |
| Active                       | Yes                  | -    |
| After Insert                 | Yes                  | -    |

## 解答

> [こちら](level-05-answer.md)
