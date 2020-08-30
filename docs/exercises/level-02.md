# Lv. 2 : トリガフレームワークを導入してみよう

だんだんロジックが複雑になってきました。
また、同じコードが重複して存在している部分も気になりますね。
このまま続けても良いのですが、そろそろ本題に入りましょう。

Apex トリガの柔軟性・可読性を高めるフレームワークを導入することで何が嬉しいのかを実戦で学んでいきます。

## ビジネス要件

将来的にシステムへの変更要求が頻繁に発生することが予見されています。
既存のビジネスロジックを保ちながら、新規のビジネスロジックを追加しやすく、テストもしやすい設計方針へ改めてください。

## アーキテクチャ要件

[Flexible Apex Trigger](https://github.com/takahitomiyamoto/flexible-apex-trigger#flexible-apex-trigger) を利用してください。
Apex トリガ内のビジネスロジックはすべて削除し、代わりに Apex クラスで実装してください。
カスタムメタデータ型を利用して各 Apex クラスの有効化・無効化を制御できるようにしてください。

## システム要件

### Apex トリガ

| 観点                     | 内容             | 備考 |
| :----------------------- | :--------------- | :--- |
| Apex トリガ名            | `AccountTrigger` | -    |
| 対象オブジェクト         | 取引先           | -    |
| 複数件レコードの一括処理 | Yes              | -    |

### Apex クラス

| 観点          | 内容                    | 備考                                            |
| :------------ | :---------------------- | :---------------------------------------------- |
| Apex クラス名 | `AccountTriggerService` | -                                               |
| メソッド (1)  | `addPrefixToName`       | [(1)-1. 項目自動更新](warm-up.md#warm-up-1-1)   |
| メソッド (2)  | `setCustomerPriority`   | [(2)-1. 項目自動更新](level-01.md#level-01-2-1) |

- 新規作成する前に `addPrefixToName` および `addPrefixToName`を実行する
- 更新する前に `addPrefixToName`を実行する

### カスタムメタデータ型

| 項目名                       | 値                      | 備考 |
| :--------------------------- | :---------------------- | :--- |
| 表示ラベル                   | `AccountTriggerService` | -    |
| カスタムメタデータレコード名 | `AccountTriggerService` | -    |
| Apex Class                   | `AccountTriggerService` | -    |
| sObject                      | `Account`               | -    |
| Active                       | Yes                     | -    |
| Before Insert                | Yes                     | -    |
| Before Update                | Yes                     | -    |

## 解答

> [こちら](level-02-answer.md)
