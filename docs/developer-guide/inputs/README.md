---
order: 3
---
# Inputs

Kestra's flow can be parameterized using inputs. Inputs will be available in variable context and can be used during the whole flow, in order to customize it depending on inputs.

A good example is when an identifier is needed (ex: storeId, paymentId) in order to change the save path for the uploaded files.

## Declaring inputs

You can declare as many inputs as necessary for any flow. Input can be **required** or **not**.
If the input is required, the flow cannot start if the input is not provided during the creation of the execution.
Also, every input will be parsed during the creation of the execution and any invalid inputs will cause a refusal to create the execution.

::: warning
If the execution is **not created** due to invalid or missing inputs, no execution will be found on the executions list.
:::

Examples:
```yaml
id: my-flow
namespace: io.kestra.docs

inputs:
  - name: string
    type: STRING
    required: true
  - name: optional
    type: STRING
    required: false
  - name: int
    type: INT
    required: true
  - name: float
    type: FLOAT
    required: true
  - name: instant
    type: DATETIME
    required: true
  - name: my-file
    type: FILE
    required: true
  - name: optionalFile
    type: FILE
    required: false
```

## Input types
The available input fields available are as follows:

### `STRING`
No control is done on this input type (no parsing), can be any string.

### `INT`
Must be a valid integer (without any decimals).

### `FLOAT`
Must be a valid float (with any decimals).

### `DATETIME`
Must be a valid full [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with the timezone expressed in UTC from a text string such as
`2007-12-03T10:15:30.00Z`.

### `FILE`
Must be a file sent with `multipart/form-data`. All the files are automatically uploaded to `Storage` and are available for further tasks. The return will be a fully qualified url with the form `kestra:///.../.../`. Kestra is able to handle this url and this input can be passed as is to task.

## Input properties
These are the properties available for all input types :

### `name`
The input name to be used with vars <code v-pre>{{ inputs.my-name }}</code>


### `required`
If the input is required. If required, no defaults value and no input provide, the execution will not be created.

### `defaults`
The default value if no input is provided. Must be a string.

### `description`
A markdown description in order to document the inputs.


## Using input value in flow

Every input is available with dynamic variables such as: <code v-pre>{{ inputs.NAME }}</code>.

For example, if you declare your input :
```yaml
inputs:
  - name: my-file
    type: FILE
  - name: my-value
    type: STRING
    required: true
```

You can use the value of the inputs with <code v-pre>{{ inputs.my-value }}</code>.


## Send inputs programmatically
The flow `my-flow` above can be triggered programmatically. Here is an example with `curl`:
```bash
curl -v "http://kestra:8080/api/v1/executions/trigger/io.kestra.docs/my-flow" \
    -H "Transfer-Encoding:chunked" \
    -H "Content-Type:multipart/form-data" \
    -F string="a string"  \
    -F optional="an optionnal string"  \
    -F int=1  \
    -F float=1.255  \
    -F instant=2020-01-14T23:00:00.000Z \
    -F "files=@/tmp/128M.txt;filename=my-file"
```

All files must be sent in the form  of data `files` with a header `filename=my-file`, which will be the name of the input.

Here is an example with `python`:
```python
import io
import requests
from requests_toolbelt.multipart.encoder import MultipartEncoder

with open("/tmp/128M.txt", 'rb') as fh:
  url = f"http://kestra:8080/api/v1/executions/trigger/io.kestra.docs/my-flow"
  mp_encoder = MultipartEncoder(fields={
    "string": "a string",
    "optional": "an optionnal string",
    "int": 1,
    "float": 1.255,
    "instant": "2020-01-14T23:00:00.000Z",
    "files": ("file", fh, "text/plain")
  })
  result = requests.post(
      url,
      data=mp_encoder,
      headers={"Content-Type": mp_encoder.content_type},
  )
```

## Send inputs via WebUI
With such a flow, the web ui lets you enter some inputs by generating a form accordingly on the flow > trigger view. The input form for the task above looks like below:

![Flow inputs](./assets/inputs.jpg)

Once the inputs are provided, you can trigger an execution flow that will run with [contextual inputs](/docs/dynamic-fields) as task variables.
