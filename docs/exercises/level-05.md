# Lv. 5 : 新規に Apex トリガを追加してみよう

[Flexible Apex Trigger](https://github.com/takahitomiyamoto/flexible-apex-trigger#flexible-apex-trigger) を利用することで、Apex トリガを量産しやすくなっています。
実際に体感してみましょう。

## ビジネス要件

- 売上として計上されている商談データを誤って削除できないようにしたいと考えています。成約済みの場合、エラーメッセージを表示して削除できないようにしてください。
- また、重要なケースが起票された場合に見逃しにくくしたいと考えています。重要度が高いケースが新規作成された場合に、Chatter フィードにメッセージが自動投稿されるようにしてください。

## アーキテクチャ要件

- [Flexible Apex Trigger](https://github.com/takahitomiyamoto/flexible-apex-trigger#flexible-apex-trigger) を利用してください。
- エラーメッセージはカスタム表示ラベルに定義してください。
- すべてのテストデータはテストクラス内で作成してください。

## システム要件

### Apex トリガ

| トリガ名             | 対象オブジェクト | 複数件レコードの一括処理 | 備考 |
| :------------------- | :--------------- | :----------------------- | :--- |
| `OpportunityTrigger` | 商談             | Yes                      | -    |
| `CaseTrigger`        | ケース           | Yes                      | -    |

### Apex クラス

| クラス修飾子          | クラス名                       | 継承                   | 備考 |
| :-------------------- | :----------------------------- | :--------------------- | :--- |
| `public with sharing` | `OpportunityTriggerValidation` | `FAT_ITriggerObserver` | -    |
| `public with sharing` | `CaseTriggerService`           | `FAT_ITriggerObserver` | -    |

#### OpportunityTriggerValidation

| アクセス修飾子と型 | メソッド名        | 説明                                  | 備考           |
| :----------------- | :---------------- | :------------------------------------ | :------------- |
| `private void`     | `preventDeletion` | [(1) 削除防止アクション](#level-05-1) | `@TestVisible` |

- 削除する前に `preventDeletion` を実行する

#### CaseTriggerService

| アクセス修飾子と型 | メソッド名      | 説明                                      | 備考           |
| :----------------- | :-------------- | :---------------------------------------- | :------------- |
| `private void`     | `postFeedItems` | [(2) フィード投稿アクション](#level-05-2) | `@TestVisible` |

- 新規作成した後に `postFeedItems` を実行する

<a id="level-05-1"></a>

##### (1) 削除防止アクション

###### 起動条件

次の条件を満たす場合:

- フェーズが `Closed Won` である

| 表示ラベル | 項目名      | 備考 |
| :--------- | :---------- | :--- |
| フェーズ   | `StageName` | -    |

###### エラーメッセージ

| エラーメッセージ                 | エラー表示場所 | 備考 |
| :------------------------------- | :------------- | :--- |
| 成約済みの商談は削除できません。 | `Stage`        | -    |

<a id="level-05-2"></a>

##### (2) フィード投稿アクション

###### 起動条件

次の条件を満たす場合:

- 優先度が `High` である

| 表示ラベル | 項目名     | 備考 |
| :--------- | :--------- | :--- |
| 優先度     | `Priority` | -    |

###### 投稿メッセージ

| 投稿メッセージ                       | 投稿場所                       | 備考 |
| :----------------------------------- | :----------------------------- | :--- |
| 優先度の高いケースが作成されました！ | 新規作成したケースのフィード欄 | -    |

### Apex テストクラス

| クラス修飾子          | クラス名                           | 用途                                                                  | 備考 |
| :-------------------- | :--------------------------------- | :-------------------------------------------------------------------- | :--- |
| `private`             | `OpportunityTriggerValidationTest` | `OpportunityTriggerValidation.cls` に対するテストクラス               | -    |
| `public with sharing` | `OpportunityTestUtils`             | `OpportunityTriggerTest.cls` で利用するテストメソッドを準備するクラス | -    |
| `private`             | `OpportunityTriggerTest`           | `OpportunityTrigger.trigger` に対するテストクラス                     | -    |
| `private`             | `CaseTriggerServiceTest`           | `CaseTriggerService.cls` に対するテストクラス                         | -    |
| `public with sharing` | `CaseTestUtils`                    | `CaseTriggerTest.cls` で利用するテストメソッドを準備するクラス        | -    |
| `private`             | `CaseTriggerTest`                  | `CaseTrigger.trigger` に対するテストクラス                            | -    |

### カスタム表示ラベル

| カテゴリ | エラー ID                      | エラーメッセージ                     | 備考 |
| :------- | :----------------------------- | :----------------------------------- | :--- |
| `ERROR`  | `CLOSED_WON_CANNOT_BE_DELETED` | 成約済みの商談は削除できません。     | -    |
| `INFO`   | `HIGH_CASE_IS_CREATED`         | 優先度の高いケースが作成されました！ | -    |

### カスタムメタデータ型

#### FAT_TriggerObserver

| 表示ラベル<br>カスタムメタデータレコード名<br>Apex Class | sObject   | Active | Before<br>Insert | Before<br>Update | Before<br>Delete | After<br>Insert |
| :------------------------------------------------------- | :-------- | :----- | :--------------- | :--------------- | :--------------- | :-------------- |
| `OpportunityTriggerValidation`                           | `Account` | Yes    | No               | No               | Yes              | No              |
| `CaseTriggerService`                                     | `Account` | Yes    | No               | No               | No               | Yes             |

## 解答

> [こちら](level-05-answer.md)
