# Warm-up : シンプルな Apex トリガを書いてみよう

まずは、シンプルな Apex トリガを書いてみましょう。

## ビジネス要件

- これから取引先オブジェクトにサンプルデータを何件か作成しようと考えています。ひと目でサンプルデータであることがわかるように、取引先レコードを新規作成するタイミングで取引先の名前の先頭に特定の文字列を自動付与してください。

## アーキテクチャ要件

- Apex トリガのみで実装してください。
- Apex クラスなど他の資源を使用しないでください。

## システム要件

### Apex トリガ

| トリガ名         | 対象オブジェクト | 複数件レコードの一括処理 | 備考 |
| :--------------- | :--------------- | :----------------------- | :--- |
| `AccountTrigger` | 取引先           | Yes                      | -    |

#### AccountTrigger

| 起動条件       | アクション                     | 備考 |
| :------------- | :----------------------------- | :--- |
| 新規作成する前 | [(1) 項目自動更新](#warm-up-1) | -    |

<a id="warm-up-1"></a>

##### (1) 項目自動更新

###### 更新条件

なし

###### 更新対象の項目

| 表示ラベル | 項目名 | 値                                         | 備考 |
| :--------- | :----- | :----------------------------------------- | :--- |
| 取引先名   | `Name` | `[サンプル]` + (半角スペース) + 元の入力値 | -    |

## 解答

> [こちら](warm-up-answer.md)
