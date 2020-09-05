# Lv. 5 の解答

1-1:

```sh
sfdx force:apex:trigger:create -d force-app/main/default/triggers -e "before insert,before update,before delete,after insert,after update,after delete,after undelete" -n OpportunityTrigger -s Opportunity -t ApexTrigger
```

##### OpportunityTrigger.trigger

```java
trigger OpportunityTrigger on Opportunity(
  before insert,
  before update,
  before delete,
  after insert,
  after update,
  after delete,
  after undelete
) {
  FAT_CommonTriggerHandler handler = FAT_CommonTriggerHandler.create(
    Opportunity.class
  );
  handler.invoke();
}
```

```sh
sfdx force:apex:trigger:create -d force-app/main/default/triggers -e "before insert,before update,before delete,after insert,after update,after delete,after undelete" -n CaseTrigger -s Case -t ApexTrigger
```

---

2-1:

---

3-1:
