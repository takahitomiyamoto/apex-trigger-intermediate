# Lv. 2 : トリガフレームワークを導入してみよう

だんだんロジックが複雑になってきました。
また、同じコードが重複して存在している部分も気になりますね。
このまま続けても良いのですが、そろそろ本題に入りましょう。

Apex トリガの柔軟性・可読性を高めるフレームワークを導入することで何が嬉しいのかを実戦で学んでいきます。

## ビジネス要件

将来的にシステムへの変更要求が頻繁に発生することが予想されています。

既存のビジネスロジックを保ちながら、新規のビジネスロジックを追加しやすく、テストもしやすい設計方針へ改めてください。

## アーキテクチャ要件

- [Flexible Apex Trigger](https://github.com/takahitomiyamoto/flexible-apex-trigger#flexible-apex-trigger) を利用してください。
- Apex トリガ内のビジネスロジックはすべて削除し、代わりに Apex クラスで実装してください。
- カスタムメタデータ型を利用して各 Apex クラスの有効化・無効化を制御できるようにしてください。

## システム要件

### Apex トリガ

| 観点                     | 内容             | 備考 |
| :----------------------- | :--------------- | :--- |
| Apex トリガ名            | `AccountTrigger` | -    |
| 対象オブジェクト         | 取引先           | -    |
| 複数件レコードの一括処理 | Yes              | -    |

### Apex クラス

| クラス修飾子          | クラス名                | 継承                   | 備考 |
| :-------------------- | :---------------------- | :--------------------- | :--- |
| `public with sharing` | `AccountTriggerService` | `FAT_ITriggerObserver` | -    |

#### AccountTriggerService

| アクセス修飾子と型 | メソッド名            | 説明                                       | 備考           |
| :----------------- | :-------------------- | :----------------------------------------- | :------------- |
| `private void`     | `addPrefixToName`     | [(1) 項目自動更新](warm-up.md#warm-up-1)   | `@TestVisible` |
| `private void`     | `setCustomerPriority` | [(2) 項目自動更新](level-01.md#level-01-2) | `@TestVisible` |

- 新規作成する前に `addPrefixToName` および `setCustomerPriority`を実行する
- 更新する前に `setCustomerPriority`を実行する

### カスタムメタデータ型

#### FAT_TriggerObserver

| 表示ラベル<br>カスタムメタデータレコード名<br>Apex Class | sObject   | Active | Before<br>Insert | Before<br>Update | Before<br>Delete | After<br>Insert |
| :------------------------------------------------------- | :-------- | :----- | :--------------- | :--------------- | :--------------- | :-------------- |
| `AccountTriggerService`                                  | `Account` | Yes    | Yes              | Yes              | No               | No              |

## 解答

> [こちら](level-02-answer.md)
