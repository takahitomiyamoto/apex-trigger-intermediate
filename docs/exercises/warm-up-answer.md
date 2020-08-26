# Warm-up 解答

- プロジェクトを作成します。

```sh
sfdx force:project:create -n demo -t standard -x
```

```sh
cd demo
```

- スクラッチ組織を作成します。

```sh
sfdx force:org:create -a demo -d 7 -f config/project-scratch-def.json -s -t scratch -v DevHub
```

- Apex トリガを作成します。

```sh
sfdx force:apex:trigger:create -d force-app/main/default/triggers -e "before insert" -n AccountTrigger -s Account -t ApexTrigger
```

## AccountTrigger.trigger

```java
trigger AccountTrigger on Account (before insert) {

}
```
