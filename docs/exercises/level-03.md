# Lv. 3 : Apex トリガのテストを書いてみよう

[Flexible Apex Trigger](https://github.com/takahitomiyamoto/flexible-apex-trigger#flexible-apex-trigger) を利用することで、トリガとビジネスロジックを分離できました。それによってテストクラスが書きやすくなっていますので実際に体感してみましょう。

## ビジネス要件

システムの品質を維持するために、既存のビジネスロジックに対する単体テストコードを準備し、高いコードカバー率を担保してください。

## アーキテクチャ要件

- [Flexible Apex Trigger](https://github.com/takahitomiyamoto/flexible-apex-trigger#flexible-apex-trigger) を利用してください。
- すべてのテストデータはテストクラス内で作成してください。

## システム要件

### Apex テストクラス

| クラス修飾子 | クラス名                    | 用途                                                              | 備考 |
| :----------- | :-------------------------- | :---------------------------------------------------------------- | :--- |
| `private`    | `AccountTriggerServiceTest` | `AccountTriggerService.cls` に対するテストクラス                  | -    |
| `private`    | `AccountTestUtils`          | `AccountTriggerTest.cls` で利用するテストメソッドを準備するクラス | -    |
| `private`    | `AccountTriggerTest`        | `AccountTrigger.trigger` に対するテストクラス                     | -    |

## 解答

> [こちら](level-03-answer.md)
