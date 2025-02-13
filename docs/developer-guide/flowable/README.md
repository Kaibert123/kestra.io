---
order: 2
---

# Flowable Task

In kestra, we orchestrate your workflow with `Flowable Tasks`. These tasks don't compute any things but allow you to build more complex workflow.
Like branching, doing tasks in parallel, ...

Flowable mostly use context with [variables](../variables) in order to define next tasks.
For example, you can use the [outputs](../outputs) of a variables to do `Switch` to defined the next tasks.

Here is the current list of Flowable Tasks

## Sequential

This flow processes tasks ones after others sequentially.
Mostly use in order to group tasks.

```yaml
id: sequential
namespace: io.kestra.tests

tasks:
  - id: sequential
    type: io.kestra.core.tasks.flows.Sequential
    tasks:
      - id: 1st
        type: io.kestra.core.tasks.debugs.Return
        format: "{{task.id}} > {{taskrun.startDate}}"
      - id: 2nd
        type: io.kestra.core.tasks.debugs.Return
        format: "{{task.id}} > {{taskrun.id}}"
  - id: last
    type: io.kestra.core.tasks.debugs.Return
    format: "{{task.id}} > {{taskrun.startDate}}"
```

<div style="text-align: right">
    <a class="btn btn-primary" href="/plugins/core/tasks/flows/io.kestra.core.tasks.flows.Sequential">Sequential Task documentation</a>
</div>


## Parallel

This flow processes tasks in parallel. It makes it convinient to process many tasks at once.

```yaml
id: parallel
namespace: io.kestra.tests

tasks:
  - id: parallel
    type: io.kestra.core.tasks.flows.Parallel
    tasks:
      - id: 1st
        type: io.kestra.core.tasks.debugs.Return
        format: "{{task.id}} > {{taskrun.startDate}}"
      - id: 2nd
        type: io.kestra.core.tasks.debugs.Return
        format: "{{task.id}} > {{taskrun.id}}"
  - id: last
    type: io.kestra.core.tasks.debugs.Return
    format: "{{task.id}} > {{taskrun.startDate}}"
```

<div style="text-align: right">
    <a class="btn btn-primary" href="/plugins/core/tasks/flows/io.kestra.core.tasks.flows.Parallel">Parallel Task documentation</a>
</div>


## Switch

This flow processes some tasks conditionnaly depending on a contextual value.
In this case, an input value will trigger only some parts of the flow.

```yaml
id: switch
namespace: io.kestra.tests

inputs:
  - name: string
    type: STRING
    required: true

tasks:
  - id: switch
    type: io.kestra.core.tasks.flows.Switch
    value: "{{inputs.string}}"
    cases:
      FIRST:
        - id: 1st
          type: io.kestra.core.tasks.debugs.Return
          format: "{{task.id}} > {{taskrun.startDate}}"
      SECOND:
        - id: 2nd
          type: io.kestra.core.tasks.debugs.Return
          format: "{{task.id}} > {{taskrun.startDate}}"
      THIRD:
        - id: 3th
          type: io.kestra.core.tasks.debugs.Return
          format: "{{task.id}} > {{taskrun.startDate}}"
    defaults:
      - id: default
        type: io.kestra.core.tasks.debugs.Return
        format: "{{task.id}} > {{taskrun.startDate}}"
```

<div style="text-align: right">
    <a class="btn btn-primary" href="/plugins/core/tasks/flows/io.kestra.core.tasks.flows.Switch">Switch Task documentation</a>
</div>


## EachSequential

This flow will generate many tasks at runtime depending on a value field.
Here this field is static, but it can be generated from a previous task output and
trigger an arbitrary number of subtasks. Each subtask will run after others sequentially.

```yaml
id: each
namespace: io.kestra.tests

tasks:
  - id: each
    type: io.kestra.core.tasks.flows.EachSequential
    value: '["value 1", "value 2", "value 3"]'
    tasks:
      - id: 1st
        type: io.kestra.core.tasks.debugs.Return
        format: "{{task.id}} > {{taskrun.value}} > {{taskrun.startDate}}"
      - id: 2nd
        type: io.kestra.core.tasks.debugs.Return
        format: "{{task.id}} > {{taskrun.value}} > {{taskrun.startDate}}"
  - id: last
    type: io.kestra.core.tasks.debugs.Return
    format: "{{task.id}} > {{taskrun.startDate}}"
```

<div style="text-align: right">
    <a class="btn btn-primary" href="/plugins/core/tasks/flows/io.kestra.core.tasks.flows.EachSequential">EachSequential Task documentation</a>
</div>

## EachParallel

This flow is the same as EachSequential but each subtask will run after in parallel.

```yaml
id: each-parallel
namespace: io.kestra.tests

tasks:
  - id: 1_each
    type: io.kestra.core.tasks.flows.EachParallel
    value: '["value 1", "value 2", "value 3"]'
    tasks:
      - id: 1-1
        type: io.kestra.core.tasks.scripts.Bash
        commands:
          - 'echo "{{task.id}} > $(date +"%T.%N")"'
          - 'sleep 1'
      - id: 1-2
        type: io.kestra.core.tasks.scripts.Bash
        commands:
          - 'echo "{{task.id}} > $(date +"%T.%N")"'
          - 'sleep 1'
  - id: 2_end
    type: io.kestra.core.tasks.debugs.Return
    format: "{{task.id}} > {{taskrun.startDate}}"
```

<div style="text-align: right">
    <a class="btn btn-primary" href="/plugins/core/tasks/flows/io.kestra.core.tasks.flows.EachParallel">EachParallel Task documentation</a>
</div>



## AllowFailure
This task will allow a failed child task. If any child task failed:
- AllowFailure will be marked as `WARNING`
- All children task inside the AllowFailure will be stopped immediately
- The execution will continue for all others tasks.
- at the end, the execution will be also marked as status `WARNING`

In this example:
- `allow-failure` will `WARNING`
- `ko` will be `FAILED`
- `next` will not be run
- `end` will be run and `SUCCESS`

```yaml
id: each
namespace: io.kestra.tests

tasks:
  - id: allow-failure
    type: io.kestra.core.tasks.flows.AllowFailure
    tasks:
      - id: ko
        type: io.kestra.core.tasks.scripts.Bash
        commands:
          - 'exit 1'
      - id: next
        type: io.kestra.core.tasks.debugs.Return
        format: "{{task.id}} > {{taskrun.startDate}}"
  - id: end
    type: io.kestra.core.tasks.debugs.Return
    format: "{{task.id}} > {{taskrun.startDate}}"
```

<div style="text-align: right">
    <a class="btn btn-primary" href="/plugins/core/tasks/flows/io.kestra.core.tasks.flows.AllowFailure">AllowFailure Task documentation</a>
</div>


## Flow

This flow will trigger another one.
This allows to decouple the first one from the second one and to monitor each flows individually.

You can pass [outputs](../outputs) to the trigger flow as [inputs](../inputs) (that you need to declare in the subflow).

```yaml
id: subflow
namespace: io.kestra.tests

inputs:
  - name: myFile
    type: FILE

tasks:
  - id: "subflow"
    type: io.kestra.core.tasks.flows.Flow
    namespace: io.kestra.tests
    flowId: my-sub-flows
    inputs:
      file: "{{ inputs.myFile' }}"
      store: 12
```

<div style="text-align: right">
    <a class="btn btn-primary" href="/plugins/core/tasks/flows/io.kestra.core.tasks.flows.Flow">Flow Task documentation</a>
</div>


## Templates
[Templates](../templates) are a special task that will include task from a template at *runtime*.
You defined the template and can use on every flow you want, allowing to share the common tasks between your flows.

```yaml
id: template
namespace: io.kestra.tests

tasks:
  - id: template
    type: io.kestra.core.tasks.flows.Template
    namespace: io.kestra.tests
    templateId: template
```

<div style="text-align: right">
    <a class="btn btn-primary" href="/plugins/core/tasks/flows/io.kestra.core.tasks.flows.Template">Template Task documentation</a>
</div>
